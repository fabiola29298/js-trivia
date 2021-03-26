
  let nombre = '' ;
  const btnNuevo = document.querySelector('#btnNuevo');

  // Inicializa el juego
  const inicializarJuego = () => {
     nombre='';

  };

  btnNuevo.addEventListener('click', () => {
    nombre = document.getElementById('nombre-usuario').value;
    localStorage.setItem("nombre-usuario", nombre);
    console.log(nombre);

    location.href='../src/categorias.html';


  });
