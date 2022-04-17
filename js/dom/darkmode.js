const d = document;
const w = window;
const ls = localStorage;
/* let btnMoon = d.querySelector(".moon");
let btnSun = d.querySelector(".sun"); */
export default function darkTheme(btn, classDark, classWhiteCountdown) {/* esta es la solucion del profe opt por ella porque es mas optima */
  //todo: cuando se quiera aplicar estilos por un tipo de atributo se expecifica con "[]" que eso en css significa que se aplica esa regla a los elementos que tengan ese atributo.
  const $themeBtn = d.querySelector(btn),
  $selectors = d.querySelectorAll("[data-dark]"), //esto nos devuelve un nodeList
  $selectorsWhite = d.querySelectorAll("[data-white]"); //esto nos devuelve un nodeList
  let storageSThemeClick;
  //console.log(w.localStorage);
        //console.log($selectorsWhite);
  let moon = "🌙",
  sun = "☀️"; 

  const lightMode = () => {
    $themeBtn.textContent = moon;
    $selectors.forEach(el => el.classList.remove(classDark));
    $selectorsWhite.forEach(el => el.classList.remove(classWhiteCountdown));
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    let $btnMoon = $themeBtn.textContent = sun; 
    $selectors.forEach(el => el.classList.add(classDark));
    $selectorsWhite.forEach(el => el.classList.add(classWhiteCountdown));
    ls.setItem("theme", "dark");
  };

  /* if (!w.localStorage.getItem("dark-mode") && !w.localStorage.getItem("☀️") && !w.localStorage.getItem("countdown__container__item--white")) {
    $themeBtn.textContent = moon;
    $selectors.forEach(el => el.classList.remove(classDark));
    $selectorsWhite.forEach(el => el.classList.remove(classWhiteCountdown));
    //console.log("if active"); 
  }else{
    $themeBtn.textContent = sun; 
    $selectors.forEach(el => el.classList.add(classDark));
    $selectorsWhite.forEach(el => el.classList.add(classWhiteCountdown));
    //console.log("else active");
  } */
  d.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      //console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        darkMode();
        
        /* let $btnMoon = $themeBtn.textContent = sun; 
        //$selectors.forEach(el => el.classList.add(classDark));
        $selectorsWhite.forEach(el => el.classList.add(classWhiteCountdown));
        let storageSThemeClickDark = w.localStorage.setItem(classDark, "background-color: var(--second-color)");
        let storageSThemeClickWhiteCountdown = w.localStorage.setItem(classWhiteCountdown, "background-color: var(--text-theme-color);");
        let storageSThemeClickBtnSun = w.localStorage.setItem(btn, "☀️");
        console.log(w.localStorage);
        localStorage.clear();
        console.log(storageGTheme); */
        
      }else{
        lightMode();
        /* localStorage.clear();
        //console.log(w.localStorage);
        $selectors.forEach(el => el.classList.remove(classDark));
        $selectorsWhite.forEach(el => el.classList.remove(classWhiteCountdown));
        $themeBtn.textContent = moon;  */
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    //console.log(ls.getItem("theme"));
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    };

    if (ls.getItem("theme") === "light") {
      lightMode();
    }

    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
  //console.log($selectors);
}



/* export default function darkmode(moon, sun) esta es mi solucion al problema{
  
  d.addEventListener("click", e => {
    //todo: importante saber que cuando se sobreescribe una clase con querySelector.classList.toggle la clase misma deja de existir en el dom hasta que se vuelva a llamar o declarar o usar este mismo metodo en el mismo selector.
    let themeDark = d.querySelector(".theme__dark");   
    let containerCountdown = d.querySelector(".countdown__container__items");
    let containerCountdownchildren = containerCountdown.children;
    //todo: importante saber como se le estan dando las propiedades a containerCoundown porque todos los elementos hijos comparten la misma clase, en ese orden de ideas se tiene que usar .children para obtener todas las clases hijas de este selector para asi poder cambiarlas todas en el tema dark, con esta idea se usa el ciclo for para recorrer cada elemento de la htmlColection node y cambiarlo ya que esto los convierte en string y si se quiere cambiar cada hijo se debe usar este metodo.

    //todo: para modificar el color: de todos los concept de countdown se tuvo que verificar sus selectores en css y remover la propiedad color: en el selector concept y agregar el color: rgba(247, 222, 30, 0.75); en el selector .countdown__container__item para que funcionara correctamente sin olvidar el buble for que itera sobre todos los htmlColection y hace esto posible con la estructura css organizada correctamente.
    if (e.target.matches(moon)) {
      for (let i = 0; i < containerCountdownchildren.length; i++) {
        containerCountdownchildren[i].setAttribute("style", "background: var(--text-theme-color); color: var(--second-color)");
      }
      themeDark.setAttribute("style", "background: var(--second-color); color: var(--text-theme-color);");
      d.querySelector(moon).classList.toggle("is-active");
      d.querySelector(sun).classList.toggle("is-active");
      //console.log("moon");
    }

    if (e.target.matches(sun)) {
      for (let i = 0; i < containerCountdownchildren.length; i++) {
        containerCountdownchildren[i].setAttribute("style", "background: var(--second-color); color: none)");
      }
      themeDark.setAttribute("style", "background: none; color: none");
      d.querySelector(moon).classList.toggle("is-active");
      d.querySelector(sun).classList.toggle("is-active");
      //console.log("sun");
    }
  })
  
} */