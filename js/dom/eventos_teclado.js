const d = document;
const keys = d.querySelector("#circle");
let valueRight = keys.style.right = "0rem";
let valueRightnum = parseInt(valueRight);
let valueTop = keys.style.top = "0rem";
let valueTopnum = parseInt(valueTop);
export function moveBall(e) {
  //todo: valor del vey code: 37 = tecla hacia la izquierda, 39 = tecla hacia la derecha, 40 = tecla hacia abajo, 38 = hacia arriba/
  //respuesta adaptada por mi analizando la solucion del profe
      if (e.key == 'ArrowUp' && valueTopnum >= -12) {
        //console.log("Run several times if top");
        valueTopnum--;
        let valueTopfinish = `${valueTopnum+"rem"}`;
        valueTop = keys.style.top = valueTopfinish;
        e.preventDefault();
      }
      if (e.key == 'ArrowDown' && valueTopnum < 13) {
        //console.log("Run several times if top");
        valueTopnum++;
        let valueTopfinish = `${valueTopnum+"rem"}`;
        valueTop = keys.style.top = valueTopfinish;
        e.preventDefault();
      }
  
      if (e.key == 'ArrowLeft' && valueRightnum < 32) {
        //console.log("Run several times if left");
        valueRightnum++;
        let valueRightfinish = `${valueRightnum+"rem"}`;
        valueRight = keys.style.right = valueRightfinish;
      }
  
      if (e.key == 'ArrowRight' && valueRightnum > -32) {
        //console.log("Run several times if right");
        valueRightnum--;
        let valueRightfinish = `${valueRightnum+"rem"}`;
        valueRight = keys.style.right = valueRightfinish;
      }

  }
  


/* codigo hecho por mi
export function moveBall(e, keyDown) {
//todo: valor del vey code: 37 = tecla hacia la izquierda, 39 = tecla hacia la derecha, 40 = tecla hacia abajo, 38 = hacia arriba/
const containerKeys = d.querySelector(keyDown);
let valueRight = containerKeys.style.right = "0rem";
let valorRightnum = parseInt(valueRight);
let valueTop = containerKeys.style.top = "0rem";
let valorTopnum = parseInt(valueTop);
console.log(valorTopnum); 

d.addEventListener("keydown", (e) =>{
    console.log("Run several times");
    
    if (e.key == 'ArrowUp' && valorTopnum >= -12) {
      console.log("Run several times if top");
      valorTopnum--;
      console.log(valorTopnum);
      let valueTopfinish = `${valorTopnum+"rem"}`;
      valueTop = containerKeys.style.top = valueTopfinish;
      e.preventDefault();
    }
    if (e.key == 'ArrowDown' && valorTopnum < 13) {
      console.log("Run several times if top");
      valorTopnum++;
      console.log(valorTopnum);
      let valueTopfinish = `${valorTopnum+"rem"}`;
      valueTop = containerKeys.style.top = valueTopfinish;
      e.preventDefault();
    }

    if (e.key == 'ArrowLeft' && valorRightnum < 34) {
      console.log("Run several times if left");
      valorRightnum++;
      let valueRightfinish = `${valorRightnum+"rem"}`;
      valueRight = containerKeys.style.right = valueRightfinish;
    }

    if (e.key == 'ArrowRight' && valorRightnum > -34) {
      console.log("Run several times if right");
      valorRightnum--;
      let valueRightfinish = `${valorRightnum+"rem"}`;
      valueRight = containerKeys.style.right = valueRightfinish;
    }

  });
}
 */
export function eventKey(e) {
  
    
      if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
      }
    
      if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmacion con el teclado");
      }
    
      if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado un aviso con el teclado");
      }

    /* mi respuesta
    if (e.ctrlKey && e.shiftKey) {
      alert("You have pressed the keys (Ctrl + Alt)");
    } 
    
   
   codigo realizado con el metodo antiguo que no debe usarse ya que no esta soportado en los navegadotres actuales
   if (e.keyCode == '38' && valorTopnum >= -12) {
      console.log("Run several times if top");
      valorTopnum--;
      console.log(valorTopnum);
      let valueTopfinish = `${valorTopnum+"rem"}`;
      valueTop = containerKeys.style.top = valueTopfinish;
      e.preventDefault();
    }
    if (e.keyCode == '40' && valorTopnum < 13) {
      console.log("Run several times if top");
      valorTopnum++;
      console.log(valorTopnum);
      let valueTopfinish = `${valorTopnum+"rem"}`;
      valueTop = containerKeys.style.top = valueTopfinish;
      e.preventDefault();
    }

    if (e.keyCode == '37' && valorRightnum <= 33) {
      console.log("Run several times if right");
      valorRightnum++;
      let valueRightfinish = `${valorRightnum+"rem"}`;
      valueRight = containerKeys.style.right = valueRightfinish;
    }

    if (e.keyCode == '39' && valorRightnum >= -33) {
      console.log("Run several times if left");
      valorRightnum--;
      let valueRightfinish = `${valorRightnum+"rem"}`;
      valueRight = containerKeys.style.right = valueRightfinish;
    } */

    /* otra forma de usar el metodo que no se be usar ya que no esta soportado en los navegadores actuales
    d.addEventListener("keydown", e);
        function e() {
      if (e.keyCode == '37') {
    alert("active right");
      }
    } */

}