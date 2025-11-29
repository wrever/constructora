# Constructora Reinaldo Jaramillo - Sitio Web Corporativo

Sitio web corporativo para Constructora y Obras Civiles Reinaldo Jaramillo, desarrollado con React, TypeScript y Vite.

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web moderna y responsive para una empresa constructora, permitiendo a los usuarios conocer los servicios ofrecidos, visualizar proyectos realizados y establecer contacto mediante un formulario.

## Tecnologías Utilizadas

### Frontend
- **React 18.2.0**: Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript 5.2.2**: Superset de JavaScript que añade tipado estático
- **Vite 5.0.8**: Herramienta de construcción y servidor de desarrollo
- **SWC**: Compilador de alto rendimiento utilizado por Vite para transpilación rápida

### Backend
- **PHP**: Script para el procesamiento del formulario de contacto mediante la función `mail()`

### Estilos
- **CSS Modular**: Arquitectura de estilos basada en módulos independientes
- **CSS Variables**: Sistema de variables para mantener consistencia en colores y espaciado
- **Responsive Design**: Diseño adaptable a diferentes tamaños de pantalla

## Estructura del Proyecto

```
constructora/
├── src/
│   ├── components/          # Componentes React reutilizables
│   │   ├── Navbar.tsx      # Barra de navegación principal
│   │   ├── Hero.tsx        # Sección principal/banner
│   │   ├── Nosotros.tsx    # Sección "Sobre Nosotros"
│   │   ├── Servicios.tsx   # Sección de servicios ofrecidos
│   │   ├── Galeria.tsx     # Galería de proyectos realizados
│   │   ├── Contacto.tsx    # Formulario de contacto
│   │   ├── Footer.tsx      # Pie de página
│   │   └── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   ├── data/               # Datos estáticos de la aplicación
│   │   └── proyectos.ts    # Información de proyectos de construcción
│   ├── types/              # Definiciones de tipos TypeScript
│   │   └── index.ts        # Interfaces y tipos compartidos
│   ├── utils/              # Funciones auxiliares
│   │   └── smoothScroll.ts # Utilidad para scroll suave
│   ├── css/                # Estilos CSS modulares
│   │   ├── variables.css   # Variables CSS globales
│   │   ├── reset.css       # Reset de estilos del navegador
│   │   ├── layout.css      # Estilos de layout general
│   │   ├── header.css      # Estilos de la barra de navegación
│   │   ├── hero.css        # Estilos del banner principal
│   │   ├── galeria.css     # Estilos de la galería
│   │   ├── forms.css       # Estilos de formularios
│   │   ├── components.css  # Estilos de componentes reutilizables
│   │   ├── nosotros.css    # Estilos de la sección "Nosotros"
│   │   ├── servicios.css   # Estilos de la sección "Servicios"
│   │   ├── footer.css      # Estilos del pie de página
│   │   ├── utilities.css   # Clases de utilidad
│   │   └── style.css       # Estilos globales e imports
│   ├── img/                # Recursos de imágenes
│   ├── App.tsx             # Componente principal de la aplicación
│   └── main.tsx            # Punto de entrada de la aplicación
├── send-email.php          # Script PHP para procesamiento de formulario
├── index.html              # Archivo HTML principal
├── package.json            # Configuración de dependencias y scripts
├── vite.config.ts          # Configuración de Vite
├── tsconfig.json           # Configuración de TypeScript
└── tsconfig.node.json      # Configuración de TypeScript para Node
```

## Requisitos Previos

Para ejecutar este proyecto, necesitas tener instalado:
- Node.js (versión 16 o superior)
- npm o yarn como gestor de paquetes

## Instalación

1. Clonar el repositorio o descargar los archivos del proyecto

2. Instalar las dependencias:
```bash
npm install
```

## Uso

### Modo Desarrollo

Para ejecutar el proyecto en modo desarrollo con hot-reload:

```bash
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:3000` por defecto.

### Compilación para Producción

Para generar una versión optimizada para producción:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

### Vista Previa de Producción

Para visualizar la versión de producción localmente:

```bash
npm run preview
```

## Funcionalidades Principales

### Navegación
- Barra de navegación fija con scroll suave entre secciones
- Menú hamburguesa responsive para dispositivos móviles
- Enlaces internos con animación de scroll

### Secciones
- **Hero**: Banner principal con llamada a la acción
- **Nosotros**: Información sobre la empresa, estadísticas y valores
- **Servicios**: Presentación de los servicios ofrecidos (Construcción General, Remodelaciones, Obras Civiles)
- **Galería**: Visualización de proyectos realizados con lightbox
- **Contacto**: Formulario de contacto con validación en cliente y servidor

### Formulario de Contacto
- Validación de campos requeridos
- Validación de formato de email
- Envío mediante PHP utilizando la función `mail()`
- Manejo de estados de carga y retroalimentación al usuario

### Características Adicionales
- Botón flotante de WhatsApp para contacto directo
- Diseño responsive adaptado a móviles, tablets y desktop
- Optimización de imágenes y recursos
- Accesibilidad web básica

## Configuración del Formulario de Contacto

El formulario de contacto requiere un servidor con PHP habilitado. El archivo `send-email.php` debe estar ubicado en la raíz del servidor.

Para configurar el email de destino, edita el archivo `send-email.php` y modifica la variable `$to_email` con la dirección de correo deseada.

## Paleta de Colores

El proyecto utiliza una paleta de colores basada en:
- Negro (#000000) como color principal
- Rojo oscuro (#950101) como color secundario
- Rojo brillante (#FF0000) como color de acento

Las variables de color están definidas en `src/css/variables.css`.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila el proyecto para producción
- `npm run preview`: Muestra una vista previa del build de producción
- `npm run lint`: Ejecuta el linter de código (ESLint)

## Despliegue

Para desplegar el proyecto en producción:

1. Ejecutar `npm run build` para generar los archivos optimizados
2. Subir el contenido de la carpeta `dist/` al servidor web
3. Subir el archivo `send-email.php` a la raíz del servidor
4. Configurar el email de destino en `send-email.php`
5. Verificar que el servidor tenga PHP habilitado

## Consideraciones Técnicas

- El proyecto utiliza TypeScript para proporcionar tipado estático y mejorar la mantenibilidad del código
- Los componentes React están organizados de forma modular para facilitar el mantenimiento
- Los estilos CSS están separados en módulos para mejorar la organización y reutilización
- La navegación implementa scroll suave para mejorar la experiencia de usuario
- El diseño es completamente responsive utilizando media queries CSS

## Autor

Proyecto desarrollado como parte de un trabajo académico universitario.

## Licencia

Este proyecto es propiedad de Constructora y Obras Civiles Reinaldo Jaramillo.

