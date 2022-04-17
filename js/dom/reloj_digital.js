const d = document;
export function relojDigital(iniciarReloj, detenerReloj) {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  //todo: add zero in from of numbers<10
  min = checkTime(min);
  sec = checkTime(sec);

  d.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;

  let relojStart = setTimeout(function () {
    relojDigital();
  }, 500);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  //todo: funciones de botones de reloj
  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciarReloj)) {
      let btnRelojactive = d.getElementById("iniciar__reloj");
   
      let btnRelojdisabled = d.getElementById("detener__reloj");
      btnRelojactive.disabled = true;
      btnRelojdisabled.disabled = false;
      
      let display = d.querySelector(".clock-1");
      display.setAttribute("style", "display: flex; text-align:center");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(detenerReloj)) {
      let btnRelojactive = d.getElementById("iniciar__reloj");
      let btnRelojdisabled = d.getElementById("detener__reloj");
      btnRelojactive.disabled// = false;
      btnRelojdisabled.disabled// = true;
      if ((btnRelojactive.disabled != false) && (btnRelojdisabled.disabled === false)) {
        btnRelojactive.disabled = false;
        btnRelojdisabled.disabled = true;
        //console.log(`soy el valor del boton activo y soy ${btnRelojactive.disabled}`)
      }
      let display = d.querySelector(".clock-1");
      display.removeAttribute("style", "display: none");
    }
  });

  
  
};

export function alarmaSound(alarmaStart, alarmaStop) {
  //todo: funciones de botones de alarma
  const cargarSonido = function(fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.setAttribute("loop", "");
    sonido.style.display = "none";
    d.body.appendChild(sonido);
    return sonido;
  };
  
  const sonido = cargarSonido("../Sonido/alarm.mp3");

  d.addEventListener("click", e => {
    if (e.target.matches(alarmaStart)) {
      let btnAlarmactive = d.getElementById("iniciar__alarma");
      let btnAlarmdisabled = d.getElementById("detener__alarma");
      let btnRelojdisabled = d.getElementById("detener__reloj");
      btnAlarmactive.disabled = true;
      btnAlarmdisabled.disabled = false;
      btnRelojdisabled.disabled// = false;

        sonido.play();
        if (btnAlarmactive.disabled != false && btnRelojdisabled.disabled != false) {
          btnRelojdisabled.disabled = false;
        }
    }
  })
  d.addEventListener("click", e => {
    if (e.target.matches(alarmaStop)) {
      let btnAlarmactive = d.getElementById("iniciar__alarma");
      let btnAlarmdisabled = d.getElementById("detener__alarma");
      btnAlarmactive.disabled// = false;
      btnAlarmdisabled.disabled// = true;
        sonido.pause();
        if (btnAlarmactive.disabled != false && btnAlarmdisabled.disabled != true) {
          btnAlarmactive.disabled = false;
          btnAlarmdisabled.disabled = true;
        }
    }
  })
}