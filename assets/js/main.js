/**
 * main.js - Configuración de Dibujos en Canvas con Animación
 */

// 1. Configuración de colores globales
const colores = {
    azul: '#3b82f6',
    verde: '#10b981',
    amarillo: '#fbbf24',
    rojo: '#f43f5e',
    morado: '#8b5cf6',
    blanco: '#f8fafc',
    fondoLab: '#1e293b'
};

/**
 * Función auxiliar para el efecto de redibujar.
 * Desvanece el canvas, limpia, ejecuta el dibujo y vuelve a aparecer.
 */
function animarCanvas(id, callback) {
    const canvas = document.getElementById(id);
    if (!canvas) return; // Seguridad por si el ID no existe
    
    const ctx = canvas.getContext('2d');
    
    // Efecto de desvanecimiento (CSS transition debe estar en el style.css)
    canvas.style.opacity = '0'; 
    
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        callback(ctx, canvas);
        canvas.style.opacity = '1'; 
    }, 300);
}

// --- FUNCIONES DE DIBUJO ---

// 1. CUADRADO
function dibujarCuadrado() {
    animarCanvas('canvas-cuadrado', (ctx) => {
        ctx.lineWidth = 5;
        ctx.strokeStyle = colores.azul;
        ctx.strokeRect(50, 50, 150, 150);
        ctx.strokeStyle = colores.morado;
        ctx.strokeRect(75, 75, 100, 100);
    });
}

// 2. TRIÁNGULO
function dibujarTriangulo() {
    animarCanvas('canvas-triangulo', (ctx) => {
        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.lineTo(200, 200);
        ctx.lineTo(50, 50);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = colores.verde;
        ctx.stroke();
    });
}

// 3. ROSTRO (Pluma)
function dibujarRostro() {
    animarCanvas('canvas-rostro', (ctx) => {
        ctx.lineWidth = 3;
        ctx.strokeStyle = colores.amarillo;
        // Cabeza
        ctx.beginPath(); 
        ctx.arc(125, 125, 80, 0, Math.PI * 2); 
        ctx.stroke();
        // Boca
        ctx.beginPath(); 
        ctx.arc(125, 125, 50, 0, Math.PI); 
        ctx.stroke();
        // Ojos
        ctx.beginPath(); ctx.arc(100, 100, 8, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(150, 100, 8, 0, Math.PI * 2); ctx.stroke();
    });
}

// 4. LÍNEAS (Rellenos y Trazos)
function dibujarLineas() {
    animarCanvas('canvas-lineas', (ctx) => {
        // Triángulo Relleno
        ctx.beginPath();
        ctx.moveTo(40, 40); ctx.lineTo(120, 40); ctx.lineTo(40, 120);
        ctx.fillStyle = colores.rojo; 
        ctx.fill();

        // Triángulo Delineado
        ctx.beginPath();
        ctx.moveTo(130, 210); ctx.lineTo(210, 210); ctx.lineTo(210, 130);
        ctx.strokeStyle = colores.rojo; 
        ctx.lineWidth = 4; 
        ctx.stroke();
    });
}

// 5. ARCOS (Muestrario)
function dibujarArcos() {
    animarCanvas('canvas-arcos', (ctx) => {
        ctx.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                ctx.beginPath();
                let x = 50 + j * 75, y = 50 + i * 75;
                ctx.arc(x, y, 20, 0, Math.PI + (Math.PI * j) / 2, i % 2 !== 0);
                if (i > 1) { 
                    ctx.fillStyle = colores.blanco; 
                    ctx.fill(); 
                } else { 
                    ctx.strokeStyle = colores.blanco; 
                    ctx.stroke(); 
                }
            }
        }
    });
}

// 6. BEZIER (Globo y Corazón)
function dibujarBezier() {
    animarCanvas('canvas-bezier', (ctx) => {
        // Globo de texto
        ctx.beginPath();
        ctx.moveTo(50, 75);
        ctx.quadraticCurveTo(50, 50, 85, 50); 
        ctx.quadraticCurveTo(120, 50, 120, 75);
        ctx.quadraticCurveTo(120, 100, 85, 100); 
        ctx.quadraticCurveTo(50, 100, 40, 120);
        ctx.strokeStyle = colores.azul; 
        ctx.lineWidth = 3; 
        ctx.stroke();

        // Corazón
        ctx.beginPath();
        ctx.moveTo(185, 90);
        ctx.bezierCurveTo(185, 87, 180, 75, 160, 75); 
        ctx.bezierCurveTo(130, 75, 130, 112, 130, 112);
        ctx.bezierCurveTo(130, 135, 155, 155, 185, 175); 
        ctx.bezierCurveTo(240, 135, 240, 112, 240, 112);
        ctx.bezierCurveTo(240, 75, 210, 75, 195, 75); 
        ctx.fillStyle = colores.rojo;
        ctx.fill();
    });
}

// 7. PACMAN (Composición compleja)
function dibujarPacman() {
    animarCanvas('canvas-pacman', (ctx) => {
        // Laberinto
        ctx.strokeStyle = colores.fondoLab; 
        ctx.lineWidth = 10;
        ctx.strokeRect(40, 40, 420, 170);

        // Pacman
        ctx.beginPath();
        ctx.arc(100, 125, 30, 0.2 * Math.PI, 1.8 * Math.PI);
        ctx.lineTo(100, 125); 
        ctx.fillStyle = colores.amarillo; 
        ctx.fill();

        // Fantasma
        let gx = 380, gy = 125;
        ctx.beginPath();
        ctx.arc(gx, gy, 25, Math.PI, 0); 
        ctx.lineTo(gx+25, gy+30);
        ctx.lineTo(gx-25, gy+30); 
        ctx.fillStyle = colores.rojo; 
        ctx.fill();

        // Ojos del Fantasma
        ctx.fillStyle = "white";
        ctx.beginPath(); ctx.arc(gx-10, gy, 5, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(gx+10, gy, 5, 0, Math.PI*2); ctx.fill();
    });
}

// Carga inicial al abrir la página
window.onload = () => {
    dibujarCuadrado(); 
    dibujarTriangulo(); 
    dibujarRostro();
    dibujarLineas(); 
    dibujarArcos(); 
    dibujarBezier(); 
    dibujarPacman();
};

// 1. Control de la Barra de Progreso
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("scroll-progress");
    if (progressBar) progressBar.style.width = scrolled + "%";
});

// 2. Sistema de Cambio de Temas
function cambiarTema(tema) {
    const root = document.querySelector(':root');
    
    if (tema === 'cyber') {
        root.style.setProperty('--accent', '#ff00ff');
        root.style.setProperty('--card-bg', '#0a0a0a');
        // Actualizamos los colores de los dibujos (opcional)
        colores.azul = '#ff00ff'; 
        colores.morado = '#00ffff';
    } else if (tema === 'neon') {
        root.style.setProperty('--accent', '#3b82f6');
        root.style.setProperty('--card-bg', '#1e293b');
        colores.azul = '#3b82f6';
        colores.morado = '#8b5cf6';
    } else if (tema === 'minimal') {
        root.style.setProperty('--accent', '#94a3b8');
        root.style.setProperty('--card-bg', '#111827');
    }
    
    // Forzar redibujado de todos los lienzos para aplicar nuevos colores
    dibujarCuadrado(); dibujarTriangulo(); dibujarRostro();
    dibujarLineas(); dibujarArcos(); dibujarBezier(); dibujarPacman();
}

// 3. Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});