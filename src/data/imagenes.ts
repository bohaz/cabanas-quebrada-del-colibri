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

/** Ilustración del ave de cada cabaña. Chincol aún no tiene ilustración. */
export const AVES: Record<string, ImageMetadata | undefined> = { loica, queltehue, tagua, zarapito, cometocino };

/** Fotos interiores por cabaña. [Pendiente: agregar las fotos de cada cabaña aquí cuando lleguen.] */
export const FOTOS_CABANA: Record<string, ImageMetadata[]> = {};

export const FOTOS = { piscina, juegos, quincho };
export { logo };
