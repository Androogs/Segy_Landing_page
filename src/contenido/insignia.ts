// Contenido de la experiencia del inicio (producto insignia). Todo lo que se lee en la portada sale de aquí y del panel:
//  - Precio, disponibilidad, capacidad y color: del inventario (Tienda web › Ajustes › Producto de la portada).
//  - Textos, especificaciones y acabados: de este archivo. VERIFÍCALOS con la ficha técnica oficial antes de publicar.
// La coreografía (posiciones y giros del equipo en cada capítulo) está en src/experiencia/coreografia.ts.

export type Lado = 'izquierda' | 'derecha' | 'centro';

export interface Capitulo {
  clave: string;
  nombre: string;          // en el riel de navegación
  titulo: string;
  texto: string;
  datos?: { valor: string; detalle: string }[];
  lado: Lado;              // dónde va el texto (el equipo se ubica al lado contrario)
  pantalla: 'bloqueo' | 'camara' | 'rendimiento' | 'vivo';
}

export interface Acabado { nombre: string; marco: string; espalda: string; muestra: string }

export const INSIGNIA = {
  titular: 'iPhone 18 Pro Max',
  bajada: 'Ya está en SEGY Palmira. Estrénalo a cuotas con crédito SEGY o entrega tu celular como parte de pago.',
  capitulos: [
    { clave: 'apertura', nombre: 'Inicio', titulo: 'iPhone 18 Pro Max', texto: '', lado: 'centro', pantalla: 'bloqueo' },
    {
      clave: 'camaras', nombre: 'Cámaras', lado: 'izquierda', pantalla: 'camara',
      titulo: 'Sistema Pro de 48 MP',
      texto: 'Principal Fusion con apertura variable, ultra gran angular y teleobjetivo periscópico, las tres de 48 megapíxeles, más escáner LiDAR. Zoom óptico de 4x y video 4K a 120 fps en Dolby Vision.',
      datos: [{ valor: '48 MP', detalle: 'en las tres cámaras traseras' }, { valor: '4x', detalle: 'zoom óptico · 40x digital' }],
    },
    {
      clave: 'rendimiento', nombre: 'Rendimiento', lado: 'derecha', pantalla: 'rendimiento',
      titulo: 'Chip A20 Pro',
      texto: 'Fabricado en 2 nanómetros con 12 GB de RAM: CPU de 6 núcleos, GPU de 7 y doble Neural Engine de 16 núcleos para Apple Intelligence. Batería para hasta 43 horas de video.',
      datos: [{ valor: 'A20 Pro', detalle: 'proceso de 2 nm' }, { valor: '12 GB', detalle: 'de memoria RAM' }],
    },
    {
      clave: 'pantalla', nombre: 'Pantalla', lado: 'izquierda', pantalla: 'vivo',
      titulo: '6,9 pulgadas',
      texto: 'OLED Super Retina XDR de 2868 × 1320 con ProMotion hasta 120 Hz y hasta 3.000 nits de brillo en exteriores. Frente Ceramic Shield 2.',
      datos: [{ valor: '120 Hz', detalle: 'ProMotion' }, { valor: '3.000', detalle: 'nits de brillo máximo' }],
    },
    {
      clave: 'colores', nombre: 'Acabados', lado: 'izquierda', pantalla: 'bloqueo',
      titulo: 'Elige tu acabado',
      texto: 'Estructura con Ceramic Shield 2, certificación IP68 y conectividad 5G, Wi-Fi 7, Bluetooth 6.0 y USB-C. Elige el color y la capacidad: te confirmamos disponibilidad en la tienda.',
    },
    { clave: 'compra', nombre: 'Comprar', titulo: 'Llévatelo hoy', texto: '', lado: 'derecha', pantalla: 'bloqueo' },
  ] as Capitulo[],
  acabados: [
    { nombre: 'Azul cielo', marco: '#93a7b8', espalda: '#b3c4d2', muestra: '#b8c9d6' },
    { nombre: 'Plata', marco: '#b9bcc2', espalda: '#d9dadd', muestra: '#dcdde0' },
    { nombre: 'Azul profundo', marco: '#2b3650', espalda: '#34415f', muestra: '#34415f' },
    { nombre: 'Naranja cósmico', marco: '#b5582c', espalda: '#cf6a37', muestra: '#d8743f' },
  ] as Acabado[],
  capacidades: ['256 GB', '512 GB', '1 TB', '2 TB'],
  // Modelo 3D del producto: «iPhone 18 Pro Max – High Quality 3D Model» de Pro Animator (Sketchfab, licencia CC BY 4.0,
  // crédito en el pie de página). Descarga y colocación del archivo: public/media/LEEME.md. La escena le oculta la
  // manzana, le pega la palmera de SEGY en la espalda y le conecta la pantalla viva (ver src/experiencia/externo.ts).
  // Si el archivo falta o falla al cargar, la portada vuelve sola al equipo genérico de SEGY.
  modelo3d: { url: '/media/iphone-18-pro-max/scene.gltf' as string | null, escala: 1, rotacionInicial: [0, 0, 0] as [number, number, number] },
};
