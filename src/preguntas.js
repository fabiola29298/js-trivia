
class Cuestionario {
  //propiedades de clase
  pregunta = '';
  respuestas = [];
  respuestaCorrecta = '';
  constructor(pregunta, respuestas, respuestaCorrecta) {
    this.pregunta = pregunta;
    this.respuestas = respuestas;
    this.respuestaCorrecta = respuestaCorrecta;
  }

  verificar(opcion) {
    if(opcion === this.respuestaCorrecta){
      return true;
    }
    else{
      return false;
    }
  }
}

let preguntasGeneral ='';
let numeroPregunta = 1;
let res = document.querySelector('#cuestionario-content');
const btnSiguiente = document.querySelector('#btn-siguiente');

function agregarNombre() {
  console.log(localStorage.getItem("nombre-usuario"));
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
      preguntasGeneral = datos;
      mostrarUnaPregunta(preguntasGeneral[0]);
      // console.log(datos);
      // let limite = escogerCategoria();
      // let i = 0;
      // while(i<datos.lenth){
      //   delete datos[i];
      //   i++;
      // }
      // datos.forEach(dato => {

      //   res.innerHTML += `
      //      <p>${dato}</p>
      //      <p>${dato.pregunta}</p>
      //      <p>${dato.preguntaCorrecta}</p>
      //     `;
      // });


    }
  }

}
function mostrarUnaPregunta(cuestionario){
    res.innerHTML = `
        <p>Pregunta ${numeroPregunta}/6</p>
        <h3>${cuestionario.pregunta}</h3>
        <div class="respuesta-card">
          <p class="respuesta">A. ${cuestionario.respuestas[0]}</p>
          <p class="respuesta">B. ${cuestionario.respuestas[1]}</p>
          <p class="respuesta">C. ${cuestionario.respuestas[2]}</p>
          <p class="respuesta">D. ${cuestionario.respuestas[3]}</p>
        </div>
      `;

}
function escogerCategoria(){

  // let res = document.querySelector('#prueba');
  // res.innerHTML = '';
  // console.log(preguntasGeneral);

  if ('Novato' === localStorage.getItem("categoria")){
    console.log('novato');
    return 0;
  }else{
    console.log('fandmo');
    return 5;
  }

  // for (let item of preguntasGeneral) {
  //   console.log(item);
  //   // let pregunta = new Cuestionario(item.pregunta, item.respuestas, item.respuestaCorrecta);
  //   res.innerHTML += `
  //    <p>${item}</p>
  //    <p>${item.pregunta}</p>
  //    <p>${item.preguntaCorrecta}</p>
  //   `;

  // }


}
function mostrarAlgo(dato, res){
  // console.log(dato);




}
function mostrarPreguntas(inicial){
  // console.log(preguntasGeneral);
  // preguntasGeneral.forEach(function(pregunta){
  //   console.log('pregunta'+ pregunta);
  // });

  // console.log(preguntasGeneral);
  // for( let i=inicial; i<(inicial+6); i++ ){
  //   // let preguntaIndividual = new Cuestionario();
  //   // let preguntaIndividual =[];
  //   let preguntaIndividual = preguntasGeneral[i];
  //   // preguntaIndividual = preguntasGeneral[i];
  //   console.log(preguntasGeneral[i].pregunta);
  //   console.log(preguntaIndividual);
  // }


}

agregarNombre();
traerDatos();
escogerCategoria();
btnSiguiente.addEventListener('click', () => {
  if (numeroPregunta < preguntasGeneral.length){
    numeroPregunta++;
    mostrarUnaPregunta(preguntasGeneral[numeroPregunta-1]);
  }
  else{
    alert("Fin de preguntas");
  }
});