import type { ImageMetadata } from 'astro';
import loica from '../assets/aves/loica.png';
import queltehue from '../assets/aves/queltehue.png';
import tagua from '../assets/aves/tagua.png';
import zarapito from '../assets/aves/zarapito.png';
import cometocino from '../assets/aves/cometocino.png';
import piscina from '../assets/fotos/piscina.jpg';
import juegos from '../assets/fotos/juegos.jpg';
import quincho from '../assets/fotos/quincho.jpg';
import logo from '../assets/logo.png';
import loica1 from '../assets/fotos/loica/1-dormitorio.jpg';
import loica2 from '../assets/fotos/loica/2-dormitorio-balcon.jpg';
import loica3 from '../assets/fotos/loica/3-cocina-comedor.jpg';
import loica4 from '../assets/fotos/loica/4-puerta.jpg';
import loica5 from '../assets/fotos/loica/5-vista-balcon.jpg';

/** Ilustración del ave de cada cabaña. Chincol aún no tiene ilustración. */
export const AVES: Record<string, ImageMetadata | undefined> = { loica, queltehue, tagua, zarapito, cometocino };

export type Foto = { src: ImageMetadata; alt: string };

/**
 * Fotos por cabaña. La primera es la portada (ficha del inicio y foto grande de la galería).
 * [Pendiente: fotos de Queltehue, Tagua, Zarapito, Chincol y Cometocino.]
 */
export const FOTOS_CABANA: Record<string, Foto[]> = {
  loica: [
    { src: loica1, alt: 'Dormitorio matrimonial con techo de madera y ventanas altas' },
    { src: loica2, alt: 'Dormitorio con televisor y puerta al balcón' },
    { src: loica3, alt: 'Barra de madera para comer junto a la ventana y la cocina' },
    { src: loica4, alt: 'Puerta de madera con el letrero de la Cabaña Loica' },
    { src: loica5, alt: 'Vista desde el balcón hacia el jardín y los pinos' },
  ],
};

export const FOTOS = { piscina, juegos, quincho };
export { logo };
