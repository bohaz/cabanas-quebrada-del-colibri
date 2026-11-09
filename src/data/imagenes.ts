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
import queltehueDormitorio from '../assets/cabanas/queltehue/dormitorio.jpg';
import queltehueCocina from '../assets/cabanas/queltehue/cocina.jpg';
import queltehueEntrada from '../assets/cabanas/queltehue/entrada.jpg';
import queltehueTerraza from '../assets/cabanas/queltehue/terraza.jpg';
import queltehueBano from '../assets/cabanas/queltehue/bano.jpg';
import taguaDormitorio from '../assets/cabanas/tagua/dormitorio.jpg';
import taguaCamarote from '../assets/cabanas/tagua/camarote.jpg';
import taguaCocina from '../assets/cabanas/tagua/cocina.jpg';
import taguaBarra from '../assets/cabanas/tagua/barra.jpg';
import taguaEntrada from '../assets/cabanas/tagua/entrada.jpg';
import zarapitoDormitorio from '../assets/cabanas/zarapito/dormitorio.jpg';
import zarapitoCamas from '../assets/cabanas/zarapito/camas.jpg';
import zarapitoPasillo from '../assets/cabanas/zarapito/pasillo.jpg';
import zarapitoCocina from '../assets/cabanas/zarapito/cocina.jpg';
import zarapitoEntrada from '../assets/cabanas/zarapito/entrada.jpg';

/** Ilustración del ave de cada cabaña. Chincol aún no tiene ilustración. */
export const AVES: Record<string, ImageMetadata | undefined> = { loica, queltehue, tagua, zarapito, cometocino };

/** `pos` es el object-position CSS que mantiene a la vista lo importante cuando la foto vertical se recorta. */
export type FotoCabana = { src: ImageMetadata; alt: string; pos?: string };

/** Fotos por cabaña, en orden: la primera es la portada. Las cabañas sin fotos muestran un recuadro de reemplazo. */
export const FOTOS_CABANA: Record<string, FotoCabana[]> = {
  queltehue: [
    { src: queltehueDormitorio, alt: 'Dormitorio matrimonial con cielo de madera y ventanal al balcón' },
    { src: queltehueCocina, alt: 'Cocina con cubierta de madera, barra con dos banquetas y ventana con cortina roja' },
    { src: queltehueEntrada, alt: 'Puerta de entrada con el letrero Queltehue y pasillo hacia el dormitorio' },
    { src: queltehueTerraza, alt: 'Balcón de madera con baranda y vista a los árboles' },
    { src: queltehueBano, alt: 'Baño con lavamanos, inodoro y cortina de ducha con hojas' },
  ],
  tagua: [
    { src: taguaDormitorio, alt: 'Dormitorio matrimonial con cama, veladores y ventana con cortina roja', pos: '50% 66%' },
    { src: taguaCamarote, alt: 'Dormitorio con camarote y cubrecamas rojos', pos: '50% 55%' },
    { src: taguaCocina, alt: 'Cocina con cocina a gas, lavaplatos, refrigerador y ventana con cortina roja', pos: '50% 58%' },
    { src: taguaBarra, alt: 'Barra de madera con banquetas junto a la cocina y mueble alto blanco', pos: '50% 62%' },
    { src: taguaEntrada, alt: 'Puerta de madera con el letrero Tagua en una pared de troncos verdes', pos: '50% 40%' },
  ],
  zarapito: [
    { src: zarapitoDormitorio, alt: 'Dormitorio matrimonial con cabecera oscura, veladores y ventana con cortina roja', pos: '50% 66%' },
    { src: zarapitoCamas, alt: 'Dormitorio con una cama y un camarote con cubrecamas azules', pos: '50% 62%' },
    { src: zarapitoPasillo, alt: 'Pasillo con muro de ladrillo y barra de madera con banquetas', pos: '50% 52%' },
    { src: zarapitoCocina, alt: 'Cocina con cocina a gas, lavaplatos, refrigerador y ventana con cortina roja', pos: '50% 55%' },
    { src: zarapitoEntrada, alt: 'Puerta de madera con el letrero Zarapito en una pared de troncos verdes', pos: '50% 40%' },
  ],
};

export const FOTOS = { piscina, juegos, quincho };
export { logo };
