# CanvasLAB - Laboratorio de Graficación 2D 🎨

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-green)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)
![Tecnologías](https://img.shields.io/badge/Stack-HTML5%20|%20CSS3%20|%20JS-orange)

**CanvasLAB** es una plataforma interactiva diseñada para explorar y demostrar las capacidades de la API Canvas de HTML5. A través de una interfaz moderna y minimalista, se presentan diversos ejercicios de trazado vectorial, desde figuras geométricas básicas hasta composiciones complejas con curvas de Bézier y animaciones.

---

## 🚀 Características Principales

- **Renderizado Dinámico**: Implementación de figuras mediante JavaScript puro (Vanilla JS).
- **Interfaz Pro**: Diseño responsivo con estética *Dark Mode*, tarjetas interactivas y efectos de cristal (Glassmorphism).
- **Sistema de Temas**: Personalización de la paleta de colores en tiempo real desde el Navbar.
- **Visualización de Trazados**: Cuadrículas de apoyo en los lienzos para entender la composición espacial de los gráficos.
- **Navegación Inteligente**: Barra de progreso de lectura y scroll suave entre secciones.

---

## 🧠 Temas y Conceptos Técnicos Implementados

En este laboratorio se cubren los pilares fundamentales de la graficación por computadora en la web:

### 1. Primitivas de Dibujo
* **Rectángulos**: Uso de `strokeRect()` y `fillRect()` para formas cuadrangulares.
* **Trazados Poligonales**: Creación de formas cerradas (triángulos) mediante el uso de `moveTo()`, `lineTo()` y `closePath()`.

### 2. Geometría Circular y Arcos
* **Arcos (`arc`)**: Uso de radianes para la creación de rostros y matrices de círculos.
* **Gestión de Ángulos**: Implementación de arcos parciales y círculos completos ($2\pi$ radianes).

### 3. Curvas Matemáticas Avanzadas
* **Curvas de Bézier Cuadráticas**: Uso de un punto de control para trazados curvos simples (burbujas de chat).
* **Curvas de Bézier Cúbicas**: Implementación de dos puntos de control para formas complejas como corazones y formas orgánicas.

### 4. Estilización y Composición
* **Contexto de Estilo**: Manipulación de `strokeStyle`, `fillStyle` y `lineWidth`.
* **Superposición**: Control del orden de renderizado para crear composiciones como el Laberinto de Pac-Man.

### 5. Interactividad y UX
* **Redibujado Suave**: Implementación de funciones de limpieza (`clearRect`) con transiciones de opacidad en CSS para evitar saltos visuales bruscos.
* **Detección de Scroll**: Cálculo dinámico del porcentaje de lectura para la barra de progreso.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5**: Estructura semántica y contenedores `<canvas>`.
* **CSS3**: Animaciones, Flexbox/Grid y diseño responsivo.
* **JavaScript (ES6+)**: Manipulación del contexto 2D (`getContext('2d')`) y lógica de temas.
* **FontAwesome**: Iconografía profesional para la interfaz.

---

## 📂 Estructura del Proyecto

```text
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globales y temas
│   ├── js/
│   │   └── main.js        # Lógica de dibujo y animaciones
│   └── img/
│       └── bloc-de-dibujo.png # Favicon e identidad visual
├── index.html              # Estructura principal
└── README.md               # Documentación