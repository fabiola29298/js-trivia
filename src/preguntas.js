function agregarNombre() {
  console.log(localStorage.getItem("nombre-usuario"));
  document.getElementById("usuario-header").innerHTML = localStorage.getItem("nombre-usuario");
};

agregarNombre();
