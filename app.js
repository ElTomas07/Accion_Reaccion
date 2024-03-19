const contenedor = document.getElementById("contenedor");
const cuadrado1 = document.getElementById("cuadrado1");
const cuadrado2 = document.getElementById("cuadrado2");

// Posiciones y velocidades iniciales
let x1 = 0;
let y1 = 0;
let vx1 = 5;
let vy1 = 5;
let x2 = 400;
let y2 = 400;
let vx2 = -5;
let vy2 = -5;

// Factor de velocidad
let factorVelocidad = 1;

// Tecla presionada
let teclaPresionada = "";

// Función para actualizar la posición de los cuadrados
function actualizar() {
  // Actualizar posiciones
  x1 += vx1 * factorVelocidad;
  y1 += vy1 * factorVelocidad;
  x2 += vx2 * factorVelocidad;
  y2 += vy2 * factorVelocidad;

  // Rebote en los bordes
  if (x1 < 0 || x1 > contenedor.clientWidth - cuadrado1.clientWidth) {
    vx1 = -vx1;
  }
  if (y1 < 0 || y1 > contenedor.clientHeight - cuadrado1.clientHeight) {
    vy1 = -vy1;
  }
  if (x2 < 0 || x2 > contenedor.clientWidth - cuadrado2.clientWidth) {
    vx2 = -vx2;
  }
  if (y2 < 0 || y2 > contenedor.clientHeight - cuadrado2.clientHeight) {
    vy2 = -vy2;
  }

  // Detección de colisión
  if (
    x1 < x2 + cuadrado2.clientWidth &&
    x1 + cuadrado1.clientWidth > x2 &&
    y1 < y2 + cuadrado2.clientHeight &&
    y1 + cuadrado1.clientHeight > y2
  ) {
    // Rebote en la colisión
    vx1 = -vx1;
    vy1 = -vy1;
    vx2 = -vx2;
    vy2 = -vy2;
  }

  // Posicionar los cuadrados
  cuadrado1.style.left = `${x1}px`;
  cuadrado1.style.top = `${y1}px`;
  cuadrado2.style.left = `${x2}px`;
  cuadrado2.style.top = `${y2}px`;

// Control de velocidad con teclas
if (teclaPresionada === "W") {
    factorVelocidad++;
  } else if (teclaPresionada === "S") {
    factorVelocidad--;
  }

  // Solicitar la siguiente actualización
  requestAnimationFrame(actualizar);
}

// Función para detectar la tecla presionada
document.addEventListener("keydown", (evento) => {
  teclaPresionada = evento.key;
});

// Iniciar la animación
actualizar();
