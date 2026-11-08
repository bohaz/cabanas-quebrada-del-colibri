/**
 * Lógica de la reserva: qué cabañas sirven, cuánto cuesta y el mensaje de WhatsApp.
 * Son funciones puras para poder probarlas y usarlas tanto en el servidor como en el navegador.
 */
import type { Cabana, Tarifa } from '../data/cabanas';

export type Solicitud = {
  cabana: Cabana | null;
  personas: number;
  llegada: string; // AAAA-MM-DD
  salida: string; // AAAA-MM-DD
  quincho: boolean;
  valorQuincho: number;
};

const DIA_MS = 86_400_000;

/** Cabañas con capacidad para ese grupo. */
export const cabanasPara = (cabanas: Cabana[], personas: number) =>
  cabanas.filter((c) => c.capacidad >= personas);

/** Tarifa que corresponde a la cantidad de personas (la primera que alcanza; si son menos, la más baja). */
export function tarifaPara(cabana: Cabana, personas: number): Tarifa {
  return cabana.tarifas.find((t) => t.personas >= personas) ?? cabana.tarifas[cabana.tarifas.length - 1];
}

/** Noches entre dos fechas AAAA-MM-DD. Devuelve 0 si faltan fechas o la salida no es posterior. */
export function contarNoches(llegada: string, salida: string): number {
  if (!llegada || !salida) return 0;
  const a = Date.parse(`${llegada}T12:00:00Z`);
  const b = Date.parse(`${salida}T12:00:00Z`);
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  return Math.max(0, Math.round((b - a) / DIA_MS));
}

/** Valor referencial: noches × tarifa (la de una noche si es solo una) + quincho. */
export function valorReferencial(s: Solicitud): number {
  const noches = contarNoches(s.llegada, s.salida);
  if (!s.cabana || noches === 0) return 0;
  const t = tarifaPara(s.cabana, s.personas);
  const porNoche = noches === 1 ? t.unaNoche : t.minimo2;
  return porNoche * noches + (s.quincho ? s.valorQuincho : 0);
}

export const formatoPesos = (n: number) => '$' + Math.round(n).toLocaleString('es-CL');

/** 2026-12-11 → 11/12 */
export function fechaCorta(iso: string): string {
  const [, m, d] = iso.split('-');
  return d && m ? `${Number(d)}/${Number(m)}` : '';
}

/** Mensaje ya escrito que el cliente envía por WhatsApp. */
export function mensajeWhatsApp(s: Solicitud): string {
  const noches = contarNoches(s.llegada, s.salida);
  const cabana = s.cabana ? `la Cabaña ${s.cabana.nombre}` : 'una cabaña';
  const partes = [`Hola, quiero reservar ${cabana} para ${s.personas} personas`];
  if (noches > 0) {
    partes.push(`del ${fechaCorta(s.llegada)} al ${fechaCorta(s.salida)} (${noches} ${noches === 1 ? 'noche' : 'noches'})`);
  }
  let texto = partes.join(', ');
  if (s.quincho) texto += ', con quincho';
  return `${texto}. ¿Está disponible?`;
}
