const d = document,
w = window;
let cancelAnimation;
 export default function scrollUp(btn) {
  let buttonUp = d.querySelector(btn);

  //console.log(buttonUp);
   w.addEventListener("scroll", e => {  
     let scrollTop = w.pageYOffset || d.documentElement.scrollTop
    
     if (scrollTop > 500) {
      buttonUp.classList.remove("hidden");
     }else{
      buttonUp.classList.add("hidden");
     }
   })
   d.addEventListener("click", e => {
    
     if (e.target.matches(btn) || e.target.matches(`${btn} *`)) { //todo: esta linea es para seleccionar todo el selector de css e.target.matches(`${btn} *`) en caso de no ponerla no funcionara si se le da click al icono dentro del boton solo si se le da click a el boton como tal, con esta linea habilitados la funcion a todo lo que este dentro de ese selector
      //let cancelAnimation = window.requestAnimationFrame(scrollUp);	
       //cancelAnimationFrame(cancelAnimation);
      w.scrollTo ({
        behavior:"smooth", 
        top: 0
      });
     }
   })
 }





/*  d.onscroll = function(){
	let scroll = document.documentElement.scrollTop;
  console.log(scroll)
  if (scroll > 500) {
    buttonUp.style.transform = "scale(1)";
  } 

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    
  }
} */