    //todo: importante resaltar que para el metodo math floor si operas con el % el valor que obtendras es el resto de una divion y si usas directamente el operador de divison nos retorna es el cociente de la misma.
    
    //todo: se le suman 1000 a la variable controladora de la cuenta atras porque el valor en get time va de 0 a 59 entonces para operar correctamente se debe pasar esta suma que hace que el valor sea el correcto, adicional para cada iteracion sel setinterval es de 1 segundo entonces se le suba ese segundo para que el valor sea correcto de operar.

     //todo: cuando la variable manejadora del tiempo entre en el metodo Math.floor inmediatamente se omiten los decimales que dan como resultado de la division / 1000, es muy importante saber porque se le suma + 1000 se debe a el metodo setinterval que itera cada un segundo, utilizando esa logica el setinterval tendria en el valor total de get time un segundo restado porque es el segundo que le asignamos para para ejecutarse, para nivelar y trabajar correctamente los valores hay que sumarle ese segundo que son 1000 milisegundos que hace que nuestro metodo arroje valores correctos al usuario.

     //todo: siempre que una division este dentro del Math.floor nos va a arojar de valor del cociente para operar con ese el, en otras palabras el valor directo del cociente de esa vision.

     /**todos los valores numericos pasados en tiempo aqui en este metodo son trabajados milisegundos lo que se hace en esta funcion es convertirlos a valores humanos leibles **/
    /**En este metodo los valores no inician en 60 si no de 0-59 para operarlos **/

export const getTime = (time) => {
  let now = new Date(),
  //limitTime = (new Date(time) - now), //todo: forma mas entendible de hacerlo
  limitTime = (new Date(time) - now + 1000) / 1000, /**Esta operacion se efectua en milisegundos de acuerdo al estandar del metodo, por lo tanto el resultado es el valor de la variable con los milisegundos que es new Date(time) de la hora mayor, restandole los de la hora menor que es la variable now, con ese resultado que es la diferecia de valor entre estas dos es que vamos a operar para mandar el alert cuando finalice la cuenta regresiva, se divide entre 1000 para poder agregarle un punto a la operacion y poder trabajar correctamente con el metodo floor, este retraso de un segundo podria eliminarse operando estas variables dentro del setInterval **/
  //seconds = ('0' + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2), //todo: forma mas entendible de hacerlo
  seconds = ('0' + Math.floor(limitTime % 60)).slice(-2), /* el calculo de time % 60 es resultado del residuo de la divicion entre esos dos valores y la omision de los dos decimales, estos se omiten porque todo valor operado dentro del Math.floor es redondeado para su manipulacion sin decimales, para que con cada iteracion arroje el resultado de segundos correcto para el usuario, en otras palabras se agrega el % 60 para que el valor de un minuto nunca sea mayor a 59 y siempre decremente de ese valor como base.*/
  //minutes = ('0' + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2), //todo: forma mas entendible de hacerlo
  minutes = ('0' + Math.floor(limitTime / 60 % 60)).slice(-2),  /* en cada iteracion va a dividir el valor de time / 60 esta operacion va a decrementar un numero cada que el cociente de la division no sea el mismo osea decremente un valor, para hacer que sea un valor entendible por el usuario agregaremos un + '0' al metodo Math.floor y utilizaremos el metodo slice(-2) para obtener el valor que el usuario pueda leer correctamente.*/
  //hours = (('0' + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))).slice(-2), //todo: forma mas entendible de hacerlo
  hours = (('0' + Math.floor(limitTime / 3600 % 24))).slice(-2),/* este valor se obtiene dividiendo el valor del tiempo en segundos sobre / 3600 segundos, ademas se le agrega el % 24 porque el valor normal de un dia son 24 horas, en caso de que se pase de ese valor se valida con el % 24 ya que este obtine el resto de dividir 25 o mas horas entre 24 en caso de que sea mas de 24 horas horas, se agregara un dia y el resto de milisegundos seran interpretados en horas, minutos y segundos*/
  //days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
  days = Math.floor(limitTime / (3600 * 24));/* el valor de la multiplicacion en el parentesis es de 86.400 que seria el valor en segundos de un dia, entonces para saber si ha pasado un dia e imprimir el valor de uno en pantalla hay que hacer la division entre esos dos valores y arrojar el cociente de la misma en pantalla. */

  //console.log(`now: ${now}`);
  //console.log(`limitTime: ${limitTime}`);
  //console.log(`seconds: ${seconds}`);
  //console.log(`hours: ${hours}`);
 


  return {
    limitTime,
    seconds,
    minutes,
    hours,
    days
  }

};

export const countdown = () => {
  let date = new Date();
  let newDateset = new Date("Mar 27, 2023 03:23:19"); /**Este valor es operado en milisegundos */
  let seconds = document.getElementById("seconds");
  let minutes = document.getElementById("minutes");
  let hours = document.getElementById("hours");
  let days = document.getElementById("days");
  //console.log(seconds);
  const timerUpdate = setInterval ( () => {
    let currenTime = getTime(newDateset);/*aca se hace la llamada */ 
    seconds.innerHTML = `${currenTime.seconds}`;
    minutes.innerHTML = `${currenTime.minutes}`;
    hours.innerHTML = `${currenTime.hours}`;
    days.innerHTML = `${currenTime.days}`;
    

    if (currenTime.time <= 1) {
      clearInterval(timerUpdate);
      alert('Fin de la cuenta');
  }
    
  }, 1000) 
  //newDateset.setMinutes(date.getMinutes() + 2)
  //newDateset.setHours(date.getHours() + 25);
}

/* 
let date = new Date(); 
let newDateset = new Date(date); */
/* newDateset.setMinutes(date.getMinutes() + 1) */
/* console.log(`newDataset: esta se ejecuta primero por ser la variable global ${newDateset}`)  */

//countdown(newDateset);





















/* let todayCountdown = new Date(),
    minSet = todayCountdown.setMinutes(1),
    minGet = todayCountdown.getMinutes();
    let secSet = todayCountdown.setSeconds(59);
    let secGet = todayCountdown.getSeconds(); */
/* export function back(e,) {
  console.log("me cargo al terminar la pagina");

  //todo: add zero in from of numbers<10
  min = checkTime(min);
  sec = checkTime(sec);

  d.getElementById("countdown").innerHTML = `${minGet} : ${secGet}`
  console.log(`Segundos: ${secGet}`);
  console.log(`Minutos: ${minGet}`);
  for (minGet = 1; minGet > 0; --minGet) {
    --minGet
    console.log(`Segundoos: ${secGet}`);
    console.log(`Minutos: ${minGet}`);
    for (secGet = 60; secGet >= 0; --secGet) {
      console.log(secGet);
      
    }
  }

    let relojStart = setTimeout(function () {
    if (secGet > 0) {
      --secGet
    }
    if (minGet < 0) {
      --minGet
    }

    if (secGet > 0) {
        --secGet
        console.log("primer if")
    }else if(minGet > 0){
      console.log("segundo if");
      --minGet
    }

    
    back();
  }, 500);  
 
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
} */