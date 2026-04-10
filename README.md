# ADCAL - Proyecto React + Vite + Tailwind CSS

Bienvenido al proyecto ADCAL, una aplicación web moderna construida con React, Vite y Tailwind CSS.

## 📋 Estructura del Proyecto

```
├── public/
│   └── assets/          # Imágenes, videos, logos
├── src/
│   ├── components/      # Navbar, Footer, Button
│   ├── pages/           # Home, Productos, Calidad, Contacto
│   ├── styles/          # CSS personalizados
│   ├── App.jsx          # Rutas principales
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Tailwind base
├── vite.config.js       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
├── package.json         # Dependencias del proyecto
├── index.html           # Archivo HTML principal
├── .env                 # Variables de entorno
└── .gitignore          # Git ignore
```

## 🚀 Instalación y Setup

### Requisitos previos
- Node.js v16 o superior
- npm o yarn

### Pasos para instalar

1. Navega a la carpeta del proyecto:
```bash
cd "Proyecto ADCAL"
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:5173`

## 📦 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la compilación de producción

## 🎨 Tecnologías utilizadas

- **React 18** - Librería UI
- **Vite** - Herramienta de construcción rápida
- **React Router** - Enrutamiento
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Procesador de CSS

## 📄 Páginas disponibles

- **Home** (`/`) - Página principal
- **Productos** (`/productos`) - Listado de productos
- **Calidad** (`/calidad`) - Información de calidad
- **Contacto** (`/contacto`) - Formulario de contacto

## 🔧 Configuración

### Variables de entorno

Edita el archivo `.env` para configurar:
```
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_NAME=ADCAL
```

## 📝 Notas

- Los estilos están construidos principalmente con Tailwind CSS
- Los componentes reutilizables están en `src/components/`
- Cada página está en `src/pages/`
- El archivo `src/App.jsx` contiene todas las rutas

## 📞 Soporte

Para más información, contacta con el equipo de desarrollo.

---

Creado con ❤️ para ADCAL
