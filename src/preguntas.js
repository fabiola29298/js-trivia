let preguntasGeneral ='';
let numeroPregunta = 1;
let preguntaActual;
let res = document.querySelector('#cuestionario-content');
const btnSiguiente = document.querySelector('#btn-siguiente');
let flag = null;//Bandera para seleccionar solo una opcion
let sumatoriaPuntos=0;
function agregarNombre() {
  // console.log(localStorage.getItem("nombre-usuario"));
  document.getElementById("usuario-header").innerHTML   = localStorage.getItem("nombre-usuario");
  document.getElementById("categoria-header").innerHTML = localStorage.getItem("categoria");
};

function traerDatos(){

  res.innerHTML = '';

  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'preguntas.json', true);

  xhttp.send();
  xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status ==200){
      let datos = JSON.parse(this.responseText);
      // editar la copia segun categoria
      if ('Novato' === localStorage.getItem("categoria")) {
        preguntasGeneral = datos.splice(0, 6);
      } else {
        preguntasGeneral = datos.splice(5, 6);
      }
      // console.log(preguntasGeneral);
      // guardar la pregunta actual
      preguntaActual = preguntasGeneral[0];

      mostrarUnaPregunta(preguntaActual);

    }
  }

}
function clickOpcion(id){
  if(flag ==null){
    document.getElementById("opcion" + id).style.backgroundColor = "#15070e";
    flag=id;
  }else{
    document.getElementById("opcion" + flag).style.backgroundColor = "#666666";
    document.getElementById("opcion" + id).style.backgroundColor = "#15070e";
    flag = id;
  }



}
function mostrarUnaPregunta(cuestionario){
    res.innerHTML = `
        <p>Pregunta ${numeroPregunta}/6</p>
        <h3>${cuestionario.pregunta}</h3>
        <div class="respuesta-card">
          <p value="0" class="respuesta" id="opcion0" onclick="clickOpcion(0)" >A. ${cuestionario.respuestas[0]}</p>
          <p value="1" class="respuesta" id="opcion1" onclick="clickOpcion(1)" >B. ${cuestionario.respuestas[1]}</p>
          <p value="2" class="respuesta" id="opcion2" onclick="clickOpcion(2)" >C. ${cuestionario.respuestas[2]}</p>
          <p value="3" class="respuesta" id="opcion3" onclick="clickOpcion(3)" >D. ${cuestionario.respuestas[3]}</p>
        </div>
      `;

}

agregarNombre();
traerDatos();


btnSiguiente.addEventListener('click', () => {
  // si no escogieron ninguna opcion
  if(flag==null){
    alert("Selecciona una opcion :v");
  }
  else{
    // si es la ultima pregunta cambiar de texto el boton
    if (numeroPregunta === 6) {
      btnSiguiente.innerText = "Finalizar preguntas";
    }
    // guardar respuesta
    preguntasGeneral[numeroPregunta - 1].respUsuario = preguntaActual.respuestas[flag];

    // revisar si es la respuesta correcta
    if (preguntaActual.respuestas[flag] === preguntaActual.respuestaCorrecta) {
      sumatoriaPuntos++;

      // guardar si esta correcta o no
      preguntasGeneral[numeroPregunta - 1].flag = true;
    }
    else {
      preguntasGeneral[numeroPregunta - 1].flag = false;
    }
    // console.log(preguntasGeneral[numeroPregunta - 2]);

    // guardar la pregunta actual
    preguntaActual = preguntasGeneral[numeroPregunta - 1];

    if (numeroPregunta < preguntasGeneral.length) {
      numeroPregunta++;

      // cambiar de pregunta
      flag = null;
      mostrarUnaPregunta(preguntaActual);
    }
    else {
      // console.log(preguntasGeneral);
      //Gurdar puntaje y array de las preguntas
      localStorage.setItem("preguntasGeneral", preguntasGeneral);
      localStorage.setItem("sumatoriaPuntos", sumatoriaPuntos);
      window.location.href = './resultados.html';
    }
  }

});