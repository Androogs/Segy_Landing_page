# Tienda web · React + TypeScript + Vite + three.js

Página pública de SEGY conectada al inventario del panel. Guía completa: **[docs/TIENDA.md](docs/TIENDA.md)**.

```
src/
  main.tsx, App.tsx      Entrada, estructura y rutas (enrutador propio sobre la History API: lib/ruta.tsx)
  lib/                   API pública, tipos, carrito (localStorage), datos del negocio, formato, cuotas, SEO, seguimiento
  componentes/           Encabezado, buscador, carrito lateral, tarjeta e ilustraciones de producto, simulador, formularios
  paginas/               Inicio, catálogo, producto, carrito, pagar, pedido, retoma, crédito, servicio técnico, visítanos, legales
  experiencia/           Experiencia 3D del inicio: Experiencia.tsx (desplazamiento), coreografia.ts, escena.ts (three.js),
                         dispositivo.ts (modelo genérico), externo.ts (modelo GLB con licencia), pantalla.ts, EquipoPoster.tsx (2D)
  contenido/             Textos editables: insignia.ts (portada), servicios.ts (retoma, grados, técnico), legal.ts
  estilos/               base.css (tokens de marca), componentes.css, experiencia.css, paginas.css
public/marca/            Logo, mascota Astro e íconos (los mismos del panel)
public/media/            Modelo 3D del producto insignia (ver public/media/LEEME.md)
```

| Comando | Qué hace |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Vite en http://localhost:5174 con proxy de `/api` al backend (`SEGY_BACKEND_URL`, :3400 por defecto) |
| `npm run typecheck` | Revisión estricta de tipos |
| `npm run build` | Tipos + build optimizado en `dist/` (three.js en un archivo aparte que se carga bajo demanda) |
| `npm run preview` | Sirve el build en http://localhost:4174 |

## Datos y API

La tienda lee precios, existencias y fotos de `/api/publico/tienda` del backend SEGY:

- **Desarrollo**: el proxy de Vite reenvía `/api` a `http://localhost:3400` (o `SEGY_BACKEND_URL`). Sin backend la página
  abre igual pero sin productos ni precios.
- **Producción**: compila con `VITE_SEGY_API=https://tu-backend` si la API vive en otro dominio, o sirve `dist/` detrás
  del mismo dominio de la API.

## Modelo 3D de la portada

El equipo insignia es un GLB con licencia (**CC BY 4.0**, crédito en el pie de página). Pasos de descarga y requisitos en
[public/media/LEEME.md](public/media/LEEME.md). Si el archivo falta, la portada muestra el equipo genérico de SEGY.
