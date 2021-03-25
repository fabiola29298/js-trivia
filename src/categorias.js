function agregarNombre() {
  console.log(localStorage.getItem("nombre-usuario"));
  document.getElementById("titulo-nombre").innerHTML += localStorage.getItem("nombre-usuario");
};

agregarNombre();
