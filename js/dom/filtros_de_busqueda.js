const d = document;

export default function filtroBusqueda(form) {
  
  let $form = d.getElementById(form),
  figcaptionForm = $form;
  let $figcaption = d.querySelector("figcaption").textContent;
  let $card = d.getElementsByClassName("card");
  
  
  /* let arregloTotal = [
    anchorsSidebar = $card[0].getElementsByTagName('figcaption').item(0).textContent,
    anchorsSidebar = $card[1].getElementsByTagName('figcaption').item(0).textContent,
    anchorsSidebar = $card[2].getElementsByTagName('figcaption').item(0).textContent,
    anchorsSidebar = $card[3].getElementsByTagName('figcaption').item(0).textContent,
    anchorsSidebar = $card[4].getElementsByTagName('figcaption').item(0).textContent
  ]; */
  /*  let arregloTotalImg = [
    anchorsSidebar = $card[0].getElementsByTagName('figcaption').item(0).previousElementSibling,
    anchorsSidebar = $card[1].getElementsByTagName('figcaption').item(0).previousElementSibling,
    anchorsSidebar = $card[2].getElementsByTagName('figcaption').item(0).previousElementSibling,
    anchorsSidebar = $card[3].getElementsByTagName('figcaption').item(0).previousElementSibling,
    anchorsSidebar = $card[4].getElementsByTagName('figcaption').item(0).previousElementSibling,
    anchorsSidebar = $card[5].getElementsByTagName('figcaption').item(0).previousElementSibling
  ];  */
  let arregloTotalFigcaption = [
    
  ];/*Este arreglo recibe todo el texto extraido de cada uno de los elementos iterados por el bucle, con estos datos haremos el filtro*/

  let arregloTotalFigure = [
    
  ];/*Se declaron los arreglos fuera de los bucles para que el scope de los mismos fuera almacenado correctamente, ya que necesitamos todos los datos */
  /*Este arreglo recibe cada unos de los atributos iterados en el bucle, con estos datos arrojaremos el atributo que el usuario este buscando*/

    
  //console.log(arregloTotalFigcaption);
  //console.log(arregloTotalFigure);
  
  for (let i = 0; i < $card.length; i++) {//todo: este for se usa para recorrer los elementos que necesitamos filtrar y convertirlos en un solo arreglo
    let arrayFigcaption = $card[i].getElementsByTagName('figcaption').item(0).textContent; /*Esta linea de codigo extrae el texto de cada elemento del filtro, con esto se realizara la busqueda*/
    let arrayFigure = $card[i]; /*Esta linea de codigo se encarga de recorrer cada atributo de los elementos que vamos a filtrar */
    //console.log(arrayFigure)  
   
    let totalFigcaption = arregloTotalFigcaption.push(arrayFigcaption); /*Esta linea de codigo se encarga de enviar cada elemento y agruparlo en un solo arreglo*/
    let totalFigure = arregloTotalFigure.push(arrayFigure); /*Esta linea de codigo se encarga de enviar cada elemento y agruparlo en un solo arreglo*/
    //console.log(totalFigcaption) 
    
  }

  d.addEventListener("keyup", e=> {//este evento se ejecuta cada vez que presionamos una tecla
    if (e.target === $form.Search) {
      let pal = d.getElementById("container__filter__search").value; //todo: aqui se extrae todo lo escrito en el input search */
      let tam = pal.length;/*En esta linea se obtiene el numero de caracteres que el usuario introduce, este dato se usara para el filtro de busqueda */
      //console.log(tam);
      //let nombre = arregloTotal; /* */
      let arrayTotalFigureFount = [
    
      ];/*Este arreglo se usa para almacenar los valores que el usuario quiere filtrar o ver */
      let arrayTotalFigureNoFount = [
    
      ];/*Este arreglo se usa para almacenar los valores que el usuario no necesita ver y no coinciden con el filtro*/
      for (const indice in arregloTotalFigcaption,arregloTotalFigure) {/*Este for lo utilizamos para operar los arreglos ya iterados con los datos que requerimos para el filtro*/
        let nombre = arregloTotalFigcaption[indice];/* Esta variable almacenar la iteracion cada de texto del arreglo*/
        let figure = arregloTotalFigure[indice];/*Esta variable almacenar la iteracion de cada atributo que necesitamos filtrar */
        let str = nombre.substring(0, tam);/*Esta variable se encarga de al almacenar la cantidad de caracteres que ingresa el usuario para hacer su busqueda*/
        //console.log(pal)
        //console.log(str)
        console.log(`let str: ${str} y let pal: ${pal}`);
        
        if (pal.length <= nombre.length && pal.length != 0 && nombre.length != 0) { /*Este condicional se encarga de validar si el usuario ingresa texto en base a eso arrojamos los resultados correctos */
          if (pal.toLowerCase() == str.toLowerCase()) {/*Este condicional valida si los datos ingresados por el usuario coinciden con los datos a buscar dentro del filtro*/
            //console.log("active");  
            let totalFigureFount = arrayTotalFigureFount.push(figure);/*En esta linea de codigo almacenamos los atributos que coinciden con la busqueda del usuario y los enviamos al arreglo de los resultados encontrados para su posteriror uso */
            arrayTotalFigureFount.forEach(el => el.classList.add("card--fount"));/*En esta linea iteramos los elementos que el usario quiere ver o filtrar y se los mostramos en pantalla */
            arrayTotalFigureFount.forEach(el => el.classList.remove("card--nofount"));/*En esta linea iteramos los elementos que el usario no quiere ver o filtrar y se los ocultamos en pantalla */

          }else if(pal.toLowerCase() != str.toLowerCase()) {/*Este condicional valida si los datos ingresados por el usuario no coinciden con los datos a buscar dentro del filtro*/
            //console.log("false")
            let totalFigureNoFount = arrayTotalFigureNoFount.push(figure);/*En esta linea de codigo almacenamos los atributos que no coinciden con la busqueda del usuario y los enviamos al arreglo de los resultados no encontrados para su posteriror uso */
            arrayTotalFigureNoFount.forEach(el => el.classList.add("card--nofount"));/*En esta linea iteramos los elementos que el usario no quiere ver o filtrar y se los ocultamos en pantalla */
          } 
        } else if (pal.length === 0) {/*Este condicional se encarga de validar si el usuario borrar todo el texto en ese caso le mostramos todos los resultados, en caso de que quiera buscar nuevamente */
          let totalFigureFount = arrayTotalFigureFount.push(figure);
          arrayTotalFigureFount.forEach(el => el.classList.remove("card--fount"));
          arrayTotalFigureFount.forEach(el => el.classList.remove("card--nofount"));
        }
      }
    
      
    }
  })

  /* d.addEventListener("keyup", (e) => { esta es la solucion del profe 

    if (e.key ===  "Escape") e.target.value = "";

    if (e.target.matches(input)) {
      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  }); */
}