import hamburgerMenu from "./dom/menu_hamburguer.js";
import { relojDigital, alarmaSound } from "./dom/reloj_digital.js";
import { eventKey, moveBall } from "./dom/eventos_teclado.js";
import { countdown } from "./dom/countdown.js";
import scrollUp from "./dom/scroll_up.js";
import darkmode from "./dom/darkmode.js";
import darkTheme from "./dom/darkmode.js";
import responsiveJs from "./dom/responsive_con_javascript.js";
import responsiveTester from "./dom/resposive_tester.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import deteccionConexion from "./dom/deteccion_conexion.js";
import deteccionWebCam from "./dom/deteccion_webcam.js";
import geolocalizacion from "./dom/geolocalizacion.js";
import filtroBusqueda from "./dom/filtros_de_busqueda.js";
import { digitalRaffle } from "./dom/digital__raffle.js";
import galeriaSlider from "./dom/galeria_slider.js";
import scrollSpy from "./dom/scroll_spy.js";
import videoInteractive from "./dom/video__interactive.js";
/* let date = new Date(); */
/* let newDateset = new Date(date); */
/* newDateset.setMinutes(date.getMinutes() + 1); */

const d = document;
const w = window;


d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  relojDigital("#iniciar__reloj", "#detener__reloj");
  alarmaSound("#iniciar__alarma", "#detener__alarma");
  //countdown(); /*despues de un analisis detallado se encontro que el error de scroll lo causaba esta funcion */
  scrollUp(".button-up");
  /*responsiveTester("container__tester__url", "container__tester__width", "container__tester__height", "#container__tester__button__try", "#container__tester__button__close"); este es mi solucion al ejercicio opte por la del profe porque es la manera mas optima de hacerlo/*
  /* darkmode(".moon", ".sun"); esta es mi solucion*/ 
  responsiveTester("responsive-tester");/**esta es la solucion del profe opte por esta porque es la mas optima */
  userDeviceInfo("user-device");
  filtroBusqueda("container__filter");
  //responsiveJs();
  digitalRaffle();/*agrega el eventpreventdefault al if para validar el comportamiento extraño */
  galeriaSlider();
  scrollSpy();
  videoInteractive();
});

d.addEventListener("keydown", e => {
  //respuesta adaptada por mi analizando la solucion del profe
  moveBall(e, "#circle");
  eventKey(e);
});

darkTheme(".dark-theme-btn","dark-mode", "countdown__container__item--white");
/* esta es la solucion del profe opto por ella porque es mas optima */
/* deteccionConexion(); */

 /* w.addEventListener("DOMContentLoaded", e => {
  deteccionWebCam(); despues de un analisis detallado se encontro que el error de scroll lo causaba esta funcion 
  
  geolocalizacion(); /*despues de un analisis detallado se encontro que el error de scroll lo causaba esta funcion 
});  */


/*realizado por mi
 d.addEventListener("DOMContentLoaded", e => {
  moveBall(e, "#circle");
  eventKey(e);
}) */







