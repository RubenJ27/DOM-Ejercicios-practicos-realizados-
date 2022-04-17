export default function hamburgerMenu(panelBtn, panel, menuLink){
 const d = document;

 d.addEventListener("click", e => {
   if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {//todo: esta linea es para seleccionar todo el selector de css e.target.matches(`${panelBtn} *`) en caso de no ponerla no funcionara si se le da click al icono dentro del boton solo si se le da click a el boton como tal, con esta linea habilitados la funcion a todo lo que este dentro de ese selector
     d.querySelector(panel).classList.toggle("is-active");
    d.querySelector(panelBtn).classList.toggle("is-active");
   }

   if (e.target.matches(menuLink)) {
    d.querySelector(panel).classList.remove("is-active");
    d.querySelector(panelBtn).classList.remove("is-active");
   }
 })
}