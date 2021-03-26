
const btnNovato = document.querySelector('#btnNovato');
const btnFandom = document.querySelector('#btnFandom');

function agregarNombre() {
  console.log(localStorage.getItem("nombre-usuario"));
  document.getElementById("titulo-nombre").innerHTML += localStorage.getItem("nombre-usuario");
};

agregarNombre();


btnNovato.addEventListener('click', () => {
  localStorage.setItem("categoria", "Novato");
  window.location.href = '../src/preguntas.html';
});
btnFandom.addEventListener('click', () => {
  localStorage.setItem("categoria", "Fandom");
  window.location.href = '../src/preguntas.html';
});