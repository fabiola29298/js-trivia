

function mostrarResultados() {
  preguntasGeneral = JSON.parse(localStorage.getItem("preguntasGeneral"));
  console.log(localStorage.getItem("sumatoriaPuntos"));
  // document.getElementById("titulo-nombre").innerHTML += localStorage.getItem("nombre-usuario");
  document.getElementById("puntaje").innerHTML = localStorage.getItem("sumatoriaPuntos");
  let res = document.querySelector('#grupo-pregunta');
  res.innerHTML = '';
  for (let item of preguntasGeneral ){
    console.log(item);
    if(item.flag){
      res.innerHTML += `
      <div class="grupo-resultados rp-correcto">
        <p class="card-pregunta-resultados">
          ${item.pregunta}</p>
        <p class="card-respuesta-resultados">${item.respUsuario}</p>
      </div>
      `;
    }
    else{
      res.innerHTML += `
      <div class="grupo-resultados rp-incorrecto">
        <p class="card-pregunta-resultados">
          ${item.pregunta}</p>
        <p class="card-respuesta-resultados">${item.respUsuario}</p>
      </div>
      `;
    }

  }
};

mostrarResultados();

btnNovato.addEventListener('click', () => {
  localStorage.setItem("categoria", "Novato");
  window.location.href = '../src/preguntas.html';
});
btnFandom.addEventListener('click', () => {
  localStorage.setItem("categoria", "Fandom");
  window.location.href = '../src/preguntas.html';
});