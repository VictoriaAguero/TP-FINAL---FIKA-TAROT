//MENU RESPONSIVE
const menucelu = document.querySelector("#menucelu");
const menucompu = document.querySelector("#menucompu");

   iconomenu.addEventListener("click", () => {
       //Creamos la funcion para ocultar o mostrar segun como esta 
       if (menucelu.style.display === "block") {
           menucompu.style.display = "none"; // Oculta el menú compu
       } else {
           menucompu.style.display = "block"; // Muestra el menú compu
       }
   });