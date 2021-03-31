
  let nombre = '' ;
  const btnNuevo = document.querySelector('#btnNuevo');

  // Inicializa el juego
  const inicializarJuego = () => {
    localStorage.setItem("nombre-usuario", "Anónimo");
    localStorage.setItem("categoria", "Novato");
    localStorage.setItem("preguntasGeneral", "");
    localStorage.setItem("sumatoriaPuntos", "0");

  };

  btnNuevo.addEventListener('click', () => {
    nombre = document.getElementById('nombre-usuario').value;
    localStorage.setItem("nombre-usuario", nombre);
    console.log(nombre);

    location.href ='https://fabiola29298.github.io/js-trivia/src/categorias.html';
    // location.href='./src/categorias.html';


  });

inicializarJuego();
