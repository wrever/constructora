export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  imagenes: ImagenProyecto[];
}

export interface ImagenProyecto {
  src: string;
  alt: string;
}

export interface ContactFormData {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

