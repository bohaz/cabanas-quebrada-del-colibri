# Cabañas Quebrada del Colibrí — sitio web

Sitio del Plan Negocio de Tu Plan Digital. Astro + Tailwind, estático, pensado para Cloudflare Pages.

## Concepto

Cada cabaña lleva el nombre de un ave chilena. La página de inicio es un **sendero en S** que pasa por detrás del contenido y guía la reserva en cinco hitos:

1. Llegada
2. ¿Cuántos vienen? (filtra las cabañas que sirven)
3. Elijan su cabaña
4. Un alto en el camino (piscina, quincho, juegos, Isla Negra)
5. ¿Cuándo llegan? (fechas, quincho, valor referencial y mensaje de WhatsApp ya escrito)

No hay reservas en línea: la reserva se confirma por WhatsApp.

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Sendero de reserva |
| `/cabanas/[slug]/` | Una página por cabaña (fotos, comodidades, tarifas) |
| `/el-lugar/` | Piscina, quincho, juegos y galería |
| `/isla-negra/` | Mapa y cercanías |

## Dónde se cambia cada cosa

- `src/data/negocio.ts`: teléfono, redes, quincho, cercanías.
- `src/data/cabanas.ts`: cabañas, comodidades y tarifas.
- `src/data/imagenes.ts`: ilustraciones de aves y fotos por cabaña (`FOTOS_CABANA`).
- `src/lib/reserva.ts`: cálculo del valor referencial y mensaje de WhatsApp (con pruebas en `tests/`).

## Comandos

```sh
npm install
npm run dev      # desarrollo en http://localhost:4321
npm test         # pruebas de la lógica de reserva
npm run build    # sitio estático en dist/
```

## Decisiones técnicas

- Animaciones con CSS: el sendero se dibuja con `animation-timeline: scroll()`; sin soporte, se ve completo. Respeta `prefers-reduced-motion`.
- JavaScript mínimo: recalcular la curva al tamaño real y el resumen de la reserva. Sin JavaScript, el botón de WhatsApp abre el chat igual.
- Menú del celular sin JavaScript (`<details>`); un script mínimo solo lo cierra al tocar un enlace.
- Imágenes optimizadas a WebP con `astro:assets`.

## Pendiente del cliente

- Fotos de cada cabaña (interiores y exteriores) y galería.
- Ilustración y dormitorios de la Cabaña Chincol.
- Dirección exacta y minutos a cada lugar cercano.
- Enlace de Facebook y dominio definitivo (`astro.config.mjs`).
- Confirmar la especie de la Tagua.
