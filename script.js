const coloresFondo = [
  { bg: '#222', text: '#eee' },      // gris oscuro
  { bg: '#003366', text: '#fff' },   // azul oscuro (el que querías)
  { bg: '#1a1a1a', text: '#ccc' },   // casi negro
  { bg: '#004d40', text: '#fff' },   // verde oscuro azulado
  { bg: '#330033', text: '#fff' }    // púrpura oscuro
];

let indiceColor = 0;

function cambiarFondo() {
  indiceColor = (indiceColor + 1) % coloresFondo.length;
  document.body.style.backgroundColor = coloresFondo[indiceColor].bg;
  document.body.style.color = coloresFondo[indiceColor].text;
}