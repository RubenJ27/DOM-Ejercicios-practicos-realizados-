const d = document,
  n = navigator,
  ua = navigator.userAgent,
  w = window;
/*el objeto navigator tiene una propiedad que nos permite evaluar la deteccion de la conexion, y el objeto window es el que tiene los eventos de conexion y desconexion */

export default function deteccionConexion() {
  let comprobarConexion = n.onLine; /* esta propiedad del navegador nos permite detecetar cuando perdamos o recuperemos la conexion*/
  let conexionOffline = d.querySelector(".conexion");
  let textConexion = d.querySelector(".text__conexion");
  const $div = d.createElement("div");


  const isOnLine=()=>{
    const $div = d.createElement("div");
    if (navigator.onLine) {
      $div.textContent = "Conexion Reestablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    }else{
      $div.textContent = "Conexion Perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin",$div);
    setTimeout(() => {
      d.body.removeChild($div);
    }, 2000);
  };
  w.addEventListener("online",(e) => isOnLine());
  w.addEventListener("offline",(e) => isOnLine());
  comprobarConexion ? isOnLine(true) : isOnLine(false);

  /*w.addEventListener("load", () => { // se utiliza el evento load porque este mismo se ejecuta cuando todos los recursos del mismo han terminado de cargar, eso hace que funcione correctamente para el ejercicio, este codigo es realizado por mi y da solucion al problema pero opte por el del profe porque es una solucion mas optima y le agregue una pequeña mejora
    comprobarConexion ? showStatus(true) : showStatus(false);//esta condicional evalua la funcion y dependiendo del valor ejecuta la deteccion de red correctas
    window.addEventListener("online", () => {// este evento se utiliza para verificar en tiempo real el estado actual de la conexion del navegador
      showStatus(true);
    });

    window.addEventListener("offline", () => {// este evento se utiliza para verificar en tiempo real el estado actual de la conexion del navegador
      showStatus(false);
    });
  });
  console.log(comprobarConexion);

  function showStatus(online) {
    if (online) {
      let onlinevisible = setInterval(() => {
        conexionOffline.classList.add("conexion--online");
        conexionOffline.classList.remove("conexion--offline");
        textConexion.classList.add("text__conexion--visible");
        textConexion.innerText = "Se reestablecio la conexion";
        conexionOffline.appendChild(textConexion);
      }, 2000);

      setInterval(() => {
        conexionOffline.classList.remove("conexion--online");
        clearInterval(onlinevisible);
      }, 4000);
    } else {
      let offlinevisible = setInterval(() => {
        conexionOffline.classList.add("conexion--offline");
        conexionOffline.classList.remove("conexion--online");
        textConexion.classList.add("text__conexion--visible");
        textConexion.innerText = "Conexion Perdida";
        conexionOffline.appendChild(textConexion);
      }, 2000);

      setInterval(() => {
        conexionOffline.classList.remove("conexion--offline");
        clearInterval(offlinevisible);
      }, 4000);
    } 
  }*/

  
}
