import { describe, expect, it } from 'vitest';
import { CABANAS, buscarCabana } from '../src/data/cabanas';
import {
  cabanasPara,
  contarNoches,
  fechaCorta,
  mensajeWhatsApp,
  tarifaPara,
  valorReferencial,
  type Solicitud,
} from '../src/lib/reserva';

const base = (o: Partial<Solicitud> = {}): Solicitud => ({
  cabana: buscarCabana('zarapito')!,
  personas: 5,
  llegada: '2026-12-11',
  salida: '2026-12-13',
  quincho: false,
  valorQuincho: 20000,
  ...o,
});

describe('cabanasPara', () => {
  it('muestra solo las cabañas con capacidad suficiente', () => {
    expect(cabanasPara(CABANAS, 5).map((c) => c.slug)).toEqual(['zarapito', 'chincol', 'cometocino']);
    expect(cabanasPara(CABANAS, 7).map((c) => c.slug)).toEqual(['cometocino']);
    expect(cabanasPara(CABANAS, 2)).toHaveLength(6);
  });
});

describe('tarifaPara', () => {
  const cometocino = buscarCabana('cometocino')!;
  it('Cometocino cobra según cuántas personas son', () => {
    expect(tarifaPara(cometocino, 4).minimo2).toBe(65000);
    expect(tarifaPara(cometocino, 5).minimo2).toBe(65000);
    expect(tarifaPara(cometocino, 6).minimo2).toBe(75000);
    expect(tarifaPara(cometocino, 7).minimo2).toBe(85000);
  });
});

describe('contarNoches', () => {
  it('cuenta noches y no acepta salidas anteriores', () => {
    expect(contarNoches('2026-12-11', '2026-12-13')).toBe(2);
    expect(contarNoches('2026-12-31', '2027-01-02')).toBe(2);
    expect(contarNoches('2026-12-13', '2026-12-11')).toBe(0);
    expect(contarNoches('', '2026-12-11')).toBe(0);
  });
});

describe('valorReferencial', () => {
  it('desde 2 noches usa la tarifa normal', () => {
    expect(valorReferencial(base())).toBe(120000);
  });
  it('una sola noche usa la tarifa de una noche', () => {
    expect(valorReferencial(base({ salida: '2026-12-12' }))).toBe(65000);
  });
  it('suma el quincho una vez', () => {
    expect(valorReferencial(base({ quincho: true }))).toBe(140000);
  });
  it('sin cabaña o sin noches es 0', () => {
    expect(valorReferencial(base({ cabana: null }))).toBe(0);
    expect(valorReferencial(base({ salida: '2026-12-11' }))).toBe(0);
  });
});

describe('mensajeWhatsApp', () => {
  it('arma el mensaje completo', () => {
    expect(mensajeWhatsApp(base({ quincho: true }))).toBe(
      'Hola, quiero reservar la Cabaña Zarapito para 5 personas, del 11/12 al 13/12 (2 noches), con quincho. ¿Está disponible?',
    );
  });
  it('sirve aunque falten la cabaña o las fechas', () => {
    expect(mensajeWhatsApp(base({ cabana: null, salida: '' }))).toBe(
      'Hola, quiero reservar una cabaña para 5 personas. ¿Está disponible?',
    );
  });
  it('formatea fechas cortas', () => {
    expect(fechaCorta('2026-01-05')).toBe('5/1');
  });
});
