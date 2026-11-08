/**
 * Las seis cabañas. Cada una lleva el nombre de un ave chilena.
 * Tarifas de temporada baja 2026 por noche: `minimo2` aplica desde 2 noches, `unaNoche` a una sola noche.
 * Cometocino cambia de valor según la cantidad de personas (5, 6 o 7).
 */
export type Tarifa = { personas: number; minimo2: number; unaNoche: number };

export type Cabana = {
  slug: string;
  nombre: string;
  ave: string; // nombre científico del ave
  capacidad: number;
  capacidadTexto: string;
  resumen: string;
  ubicacion?: string;
  accesoUniversal?: boolean;
  comodidades: string[];
  tarifas: Tarifa[]; // ordenadas de menor a mayor cantidad de personas
  airbnb?: string;
};

const BASICAS = ['Comedor de diario', 'Cocina equipada', 'TV cable', 'WiFi', 'Estacionamiento'];

export const CABANAS: Cabana[] = [
  {
    slug: 'loica',
    nombre: 'Loica',
    ave: 'Leistes loyca',
    capacidad: 2,
    capacidadTexto: '2 personas',
    resumen: 'Dormitorio matrimonial, baño en suite y balcón.',
    ubicacion: 'Segundo piso, a la izquierda.',
    comodidades: ['Dormitorio matrimonial', 'Baño en suite', 'Balcón', ...BASICAS],
    tarifas: [{ personas: 2, minimo2: 45000, unaNoche: 50000 }],
    airbnb: 'https://airbnb.com/h/loica',
  },
  {
    slug: 'queltehue',
    nombre: 'Queltehue',
    ave: 'Vanellus chilensis',
    capacidad: 2,
    capacidadTexto: '2 personas',
    resumen: 'Dormitorio matrimonial, baño en suite y balcón.',
    ubicacion: 'Segundo piso, a la derecha.',
    comodidades: ['Dormitorio matrimonial', 'Baño en suite', 'Balcón', ...BASICAS],
    tarifas: [{ personas: 2, minimo2: 45000, unaNoche: 50000 }],
    airbnb: 'https://airbnb.com/h/queltehue',
  },
  {
    slug: 'tagua',
    nombre: 'Tagua',
    ave: 'Fulica armillata', // [Por confirmar: especie de tagua]
    capacidad: 4,
    capacidadTexto: '4 personas',
    resumen: 'Acceso universal para silla de ruedas y dos dormitorios.',
    accesoUniversal: true,
    comodidades: [
      'Dormitorio matrimonial',
      'Dormitorio con camarote de 1½ plaza',
      'Baño privado con accesibilidad universal',
      ...BASICAS,
    ],
    tarifas: [{ personas: 4, minimo2: 55000, unaNoche: 60000 }],
    airbnb: 'https://airbnb.com/h/tagua',
  },
  {
    slug: 'zarapito',
    nombre: 'Zarapito',
    ave: 'Numenius hudsonicus',
    capacidad: 5,
    capacidadTexto: '5 personas',
    resumen: 'Dormitorio matrimonial y otro con cama y camarote.',
    ubicacion: 'Primer piso, a la derecha.',
    comodidades: ['Dormitorio matrimonial', 'Dormitorio con una cama y un camarote', 'Baño privado', ...BASICAS],
    tarifas: [{ personas: 5, minimo2: 60000, unaNoche: 65000 }],
    airbnb: 'https://airbnb.com/h/zarapito',
  },
  {
    slug: 'chincol',
    nombre: 'Chincol',
    ave: 'Zonotrichia capensis',
    capacidad: 5,
    capacidadTexto: '5 personas',
    resumen: 'Cabaña para 5 personas.', // [Pendiente: detalle de dormitorios]
    comodidades: [...BASICAS],
    tarifas: [{ personas: 5, minimo2: 65000, unaNoche: 70000 }],
  },
  {
    slug: 'cometocino',
    nombre: 'Cometocino',
    ave: 'Phrygilus gayi',
    capacidad: 7,
    capacidadTexto: '5 a 7 personas',
    resumen: 'Living con sofá cama y terraza con vista a la quebrada.',
    comodidades: [
      'Dormitorio matrimonial',
      'Dormitorio con una cama y un camarote',
      'Living con sofá cama de 2 plazas',
      'Baño privado',
      'Terraza con vista a la quebrada',
      ...BASICAS,
    ],
    tarifas: [
      { personas: 5, minimo2: 65000, unaNoche: 70000 },
      { personas: 6, minimo2: 75000, unaNoche: 80000 },
      { personas: 7, minimo2: 85000, unaNoche: 90000 },
    ],
    airbnb: 'https://airbnb.com/h/cometocino',
  },
];

export const buscarCabana = (slug: string) => CABANAS.find((c) => c.slug === slug);
export const precioDesde = (c: Cabana) => c.tarifas[0].minimo2;
