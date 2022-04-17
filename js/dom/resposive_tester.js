const d = document,
w = window;

export default function responsiveTester(form, idUrl, idWidht, idHeight, idBtntry, idBtnclose) {
  /* let windowTester; este es mi solucion al ejercicio opte por la del profe porque es la manera mas optima de hacerlo
  let url = d.getElementById(idUrl),
  width = d.getElementById(idWidht),
  height = d.getElementById(idHeight),
  btnClose = d.getElementById(idBtnclose);
  

  //todo: funciones de botones en el responsive tester
  d.addEventListener("click", (e) => {
    if (e.target.matches(idBtntry)) {
      let valueUrl = url.value;
      let valueWidth = width.value;
      let valueHeight = height.value;
      let valueWidthnum = Math.round(valueWidth);
      let valueHeightnum = Math.round(valueHeight);

      //validaciones de los botones del responsive tester
      if (valueWidthnum === 0) {
        alert(`Recuerde que los campos no pueden estar vacios porfavor ingrese valores numericos validos en el Ancho`);
      }else if (valueHeightnum === 0) {
        alert(`Recuerde que los campos no pueden estar vacios porfavor ingrese valores numericos validos en el Alto`);
      }else if (isNaN(valueWidthnum)) {
        alert(`Por favor ingrese un valor numerico valido en el campo de Ancho: ${valueWidth} recuerde que no pueden estar vacio los campos`);
      }else if (isNaN(valueHeightnum)) {
        alert(`Por favor ingrese un valor numerico valido en el campo de Largo: ${valueHeight} recuerde que no pueden estar vacio los campos`);
      }else if (valueWidth === "" && valueHeight === "") {
        alert(`Recuerde que los campos no pueden estar vacios porfavor ingrese valores numericos validos`);
      }else if (typeof valueWidthnum === "number" && typeof valueHeightnum === "number") {
        windowTester = w.open(`${valueUrl}`, "Responsive Tester", `width=${valueWidth} height=${valueHeight}`);  
      }
      
    }else if (e.target.matches(idBtnclose)) {
      windowTester.close();
    }
  }) */

  const $form = d.getElementById(form); /*Se utiliza la notacion del $ para hacer referencia a una variable que guarda un elemento del DOM */
  let tester;

  d.addEventListener("submit", e=> {
    if (e.target === $form) {
      e.preventDefault();
      tester = w.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
    }
  });

  d.addEventListener("click", e=> {
    if (e.target === $form.cerrar) {
      tester.close();
    }
  });
  
}