
const btnNovato = document.querySelector('#btnNovato');
const btnFandom = document.querySelector('#btnFandom');
// Inicializa el juego
const inicializarJuego = () => {
  // localStorage.setItem("nombre-usuario", "Anónimo");
  localStorage.setItem("categoria", "Novato");
  localStorage.setItem("preguntasGeneral", "");
  localStorage.setItem("sumatoriaPuntos", "0");

};

function agregarNombre() {
  console.log(localStorage.getItem("nombre-usuario"));
  document.getElementById("titulo-nombre").innerHTML += localStorage.getItem("nombre-usuario");
};

agregarNombre();
inicializarJuego();


btnNovato.addEventListener('click', () => {
  localStorage.setItem("categoria", "Novato");
  location.href = '../src/preguntas.html';
});
btnFandom.addEventListener('click', () => {
  localStorage.setItem("categoria", "Fandom");
  location.href = '../src/preguntas.html';
});