const d = document;

export default function galeriaSlider(){
  const $nextBtn = d.querySelector(".slider__btn__next"),
  $prevBtn = d.querySelector(".slider__btn__prev"),/*querySelector: retorna el primer elemento que cumpla con el criterio dado. Puede ser invocada sobre el docuement o sobre algun elemento. En caso de usarse sobre un elemento, las busquedas se limita a los hijos de ese elemento. Si la busqueda no se encuentra retorna null.*/
  $slides = d.querySelectorAll(".slider__slide");/*querySelectorAll:  Retorna todos los elementos que cumplan con el criterio dado. Al igual que querySlector puede ser invocada sobre el document o sobre algun elemento. Siempre retorna un NodeList, el cual no es un array con todas las de la ley (mpa, reduce, indexOf, etc), pero puede convertirse con facilidad en uno. Si no encuentra elementos que cunmplan el criterio, retorna un NodeList sin elementos, nunca retorna null*/
  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }

      $slides[i].classList.add("active");
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if (i >= $slides.length) {
        i = 0;
      }

      $slides[i].classList.add("active");
    }

  });
  
  
  
  
  /* const imgArray = ['img/animals.jpg', 'img/people.jpg', 'img/arch.jpg']; esta es mi solucion opte por la del profe porque es mas optima
  let positionCurrent = 0;
  let $btnPrev = d.querySelector('#retroceder');
  let $btnNext = d.querySelector('#avanzar');
  let $img = d.querySelector('#imagen'); 
  console.log(imgArray);

  //funcion que cambia la foto en la siguiente posicion 
  function pasarFoto(){
    if (positionCurrent >= imgArray.length - 1) {
      positionCurrent = 0;
    }else {
      positionCurrent++;
    }
    console.log(`next${positionCurrent}`);
    renderImg();
  }

  //funcion que cambia la foto en la anterior posicion 
  function retrocederFoto(){
    if (positionCurrent <= 0) {
      positionCurrent = imgArray.length - 1;
    }else {
      positionCurrent--;
    }
    console.log(`prev${positionCurrent}`);
    renderImg();
  }
  

  //funcion que actualiza la imagen dependiendo de la posicion actual
  function renderImg(){
    $img.style.backgroundImage = `url(${imgArray[positionCurrent]})`;
  }

  //eventos

   $btnPrev.addEventListener("click", retrocederFoto);
  $btnNext.addEventListener("click", pasarFoto);
 
  //iniciar
  renderImg();
   */
}