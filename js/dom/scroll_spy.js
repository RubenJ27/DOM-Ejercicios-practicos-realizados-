const d = document;

export default function scrollSpy() {
  /*Indicador de menu*/
  /*Esto se tiene que tener en cuenta, un elemento root(observador) y un elemento target (observado), se debe tener muy presente que el elemento target debe set un descendiente del elemento root para poder ser observado */
  /*El IntersectionObserver objeto toma dos argumentos, una funcion de devoulucion de llamada y un objeto*/
  /*Se requieren tres pasos principales: 
  1. Crear el observador, o crear la instancia del mismo, 
  2. Definir eventos de devolucion de llamada, 
  3. Definir el objeto de destino a observar.*/
  /*Para observar el elemento, debemos usar el metodo observe y le pasamos la referencia del elemento que queremos observar*/
  const $secciones = document.querySelectorAll(
    ".section__container"
  ); /*Observador */
  const $menuItems = document.querySelectorAll(".menu__item"); /*Observado */

  /*este es el primer paso crear el observador*/
  const config = {
    /*Este es el objeto con la configuracion deseada de los tres elementos principales, si esto no se realiza se tomaran los valores por defecto */
    root: null /*El elemento que es usado como viewport para comprobar la visibilidad de elemento target. Debe ser ancestro de target. Por defecto es el viewport del navegador si no se especifica o si es null*/,
    //rootMargin: "0px",
     /*Margen al rededor del elemento root, puede tener valores imilares a los de css, estos valores sirven para aumentar o encoger cada lado del cuadro delimitador del elemento root antes de calcular las intersecciones, por defecto son todos cero */
    threshold: [0.5, 0.75] //todo: esta es la mejor opcion/
    /*Es un numero o un array de numeros que indican a que porcentaje de visibilidad del elemento target, la funcion callback del observador deberia ser ejecutada, el valor por defecto es cero ("lo cual significa que tan pronto como un pixel sea visible, la funcion callback sera ejecutada") */
  };

  const observer = new IntersectionObserver(funcionObserver, config);/*Este es el observador y para que funcione se le pasa una funcion, y las opciones, es la referencia al observer que ha lanzado la interseccion*/



  /*este es el segundo paso definir eventos de devolucion de llamada */
  function funcionObserver(entries) {
    /*La funcion de devolucion de llamada toma un argumento de entradas que se refieren a una matriz de elementos que estamos observando. Dentro de la funcion hay un bucle que aplica la logica necesaria para cada entrada. IntersectionObserver puede aceptar solo un elemento de observacion, Es por eso que estamos iterando los elementos para observar cada uno por separado*/
    /*entries: Array de objetos que contienen informacion sobre la inserccion*/
    //todo:  entries son todas las secciones que almacena la variable $secciones, que se le asigno el observador con el forEach en el tercer paso para usar la api/
    entries.forEach((entry) => {
      //todo:  entries.forEach(entry) se utiliza para recorrer cada una de las entradas individualmente y poder operar con ellas con mas facilidad, en ese orden de ideas entry es cada elemento individual del arreglo entries/
      /*objetivo a observar*/
      /*Este entries parametro es el unico argumento que acepta la funcion y solo genera la informacion relacionada con cada elemento que cambia su estado de interseccion */
      //cada miembro es un objeto IntersectionObserverEntry. por ejemplo, si la visibilidad de dos objetos observados cambia al mismo tiempo, la matriz de entrada tendra dos miembros.
      if (entry.isIntersecting) {
        /*cada entry incluye un muchas propiedades. La isIntersecting propiedad tiene un valor de true si el elemento esta en la ventana grafica y false cuando no. La target propiedad es el elemento mismo */
        /*La propiedad IntersectionObserverEntry de solo lectura de la interfaz isIntersecting es un valor booleano que es true si el elemento de destino se cruza con la raiz del observador de la interseccion. si esto es true, entonces IntersectionObserverEntry describe una transicion a un estado de interseccion; si es false, entonces sabes que la transicion es de interseccion a no interseccion.
         */ const itemActual = Array.from($menuItems).find(
          (item) => item.dataset.url === entry.target.id
        );
        /*el metodo Array.flom crea una instancia de array a partir de un objeto iterable, el metodo find() devuelve el valor del primer elemento del array que cumple la funcion de prueba proporciona */
        //todo: en entry.target.id esto se utiliza para acceder al atributo target, que es el objeto que esta vigilando el observador, y se accede a todas sus propiedades porque es un elemento del dom, en ese orden de ideas accedemos a la que requerimos en especifico que es el id/
        itemActual.classList.add("active");
        /* console.log(itemActual);
        console.log($menuItems); */
        for (const item of $menuItems) {
          /*for of ejecuta un bloque de codigo para cada elemento de un objeto iterable, como lo son los string, array o NodeList, typedarray,map, set e iterables definidos por el usuario, y se almacena en la variable en cada iteracion */
          //console.log(item)
          if (item != itemActual) {
            item.classList.remove("active");
          }
        }
      }
    });
  }

  /*Este es el tercer paso determinar en elemento para ser observado, una vez se ha creado el observador, hay que darle un elemento objetivo a observar*/
  /*Una vez se ha creado el observer, necesita darle un elemento target para observar */
  /*observe() agrega un elemento al conjunto de elementos de destino que esta siendo observado por IntersectionObserver. Recibe como parametro el elemento a observar que debe ser desendiente del elemento raiz. su sintaxis es IntersectionObserver.observe(targetElement). */
  /* */
  /*que es un e.target, el atributo de destino especifica que elemento DOM activo el evento. La propiedad de evento de destino puede devolver el nodo de destino del evento(el nodo que activo el evento), como el elemento, documento o ventana que genera el evento, obtiene el elemento en el que ocurrio originalmente el evento. */
  $secciones.forEach((seccion) => observer.observe(seccion));
  //todo:  $secciones esta variable contiene todas las secciones que tienen el atributo data-url y a cada uno de estos elementos se le asigno mediante el forEach el observador/
  /*Para observar el elemento, debemos usar el metodo observe y le pasamos la referencia del elemento que queremos observar*/
  /*Como ya tenemos la instancia de nuestro objeto, ejecutamos el metodo observe() y le pasamos el elemento real a observar (target).Cuando el target cruce el umbral del elemento root, se ejecutara el callback*/
  /*el callback que indicamos al observador sera ejecutado ahora por primera vez*/
  /*espera hasta que le asignemos un target a nuestro observador (aun si el target no esta actualmente visible) */
  /*Cada vez que el objetivo alcanza un umbral especificado para IntersectionObserver, se invoca la devolucion de llamada, La devolucion de llamada recibe una lista de objetos IntersectionObserverEntry y el observador */

  /* const funcionObserver = entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting){
              const itemActual = Array.from($menuItems).find(item => item.dataset.url === entry.target.id);
              itemActual.classList.add('active');
              console.log(itemActual);
              console.log($menuItems);
              for (const item of $menuItems) {
                  if (item != itemActual){
                      item.classList.remove('active')
                  }
              }
          }
      })
  }

  const observer = new IntersectionObserver(funcionObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  })

  $secciones.forEach(seccion => observer.observe(seccion)); */
}
