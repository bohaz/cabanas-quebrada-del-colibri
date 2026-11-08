/** Datos generales del negocio. Un solo lugar para cambiar teléfono, redes o tarifas extra. */
export const NEGOCIO = {
  nombre: 'Cabañas Quebrada del Colibrí',
  nombreCorto: 'Quebrada del Colibrí',
  descripcion: 'Cabañas equipadas de estilo rústico moderno con grato ambiente familiar en Isla Negra.',
  localidad: 'Isla Negra',
  region: 'Región de Valparaíso',
  whatsapp: '56996847155',
  telefonoVisible: '+56 9 9684 7155',
  instagram: 'https://www.instagram.com/cabanasquebradadelcolibri/',
  instagramUsuario: '@cabanasquebradadelcolibri',
  facebook: '', // [Pendiente: enlace de la página de Facebook]
  temporada: 'Temporada baja 2026',
  quincho: { valor: 20000, horario: 'de 12:00 a 22:00' },
  cercanias: ['Casa Museo Pablo Neruda', 'Playa Las Ágatas', 'Playa del Poeta', 'Quebrada de Córdova'],
} as const;

export const urlWhatsApp = (texto?: string) =>
  `https://wa.me/${NEGOCIO.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;
