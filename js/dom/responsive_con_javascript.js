const d = document;
const w = window;
//todo: la clave para resolver este ejercicio es seleccionar los elementos correspientes en el dom para su posterior eliminacion o adicion cuando se este en la resolucion requerida usando los metodos que se requieran */
export default function resposiveJs(active) {
  //resize, load, window match media
  let selectorFather = d.getElementById("section4");
  let linkYoutube = w.matchMedia("(max-width: 600px)");
  let selectorYoutube = d.querySelector(".youtube__link");
  let linkYoutubematches =
    linkYoutube.matches; /*esto valida si el valor del metodo matches true o false */

  let linkMaps = w.matchMedia("(max-width: 600px)");
  let selectorMaps = d.querySelector(".maps__link");
  let linkMapsmatches =
    linkMaps.matches; /*esto valida si el valor del metodo matches true o false */
  let comprobarExistenciayoutube = selectorYoutube.contains(
    d.querySelector(".youtube__link")
  );
  let comprobarExistenciamaps = selectorMaps.contains(
    d.querySelector(".maps__link")
  );

  //console.log(comprobarExistenciamaps);

  /*funciones que elimina los iframe y agrega los links */
  const removeIframe = () => {
    //console.log("true");
    let removeSelectoryoutube =
      selectorYoutube.parentNode.removeChild(selectorYoutube);
    removeSelectoryoutube.remove("iframe");
    //console.log(removeSelectoryoutube);
    const linkYoutubea = d.createElement("a");
    linkYoutubea.href = "https://www.youtube.com/embed/ojcNcvb1olg";
    linkYoutubea.style =
      "display: block; margin: 1.2rem 0; text-decoration: none;";
    let addClasslinkyoutube = linkYoutubea.classList.add("link__youtube");
    linkYoutubea.innerHTML = "Link de video YouTube";
    selectorFather.appendChild(linkYoutubea);

    
    let removeSelectorMPAS = selectorMaps.parentNode.removeChild(selectorMaps);
    removeSelectorMPAS.remove("iframe");
    const linkMapsa = d.createElement("a");
    linkMapsa.href =
      "https://www.google.com/maps/place/ciudad+de+Tokio,+Tokio,+Jap%C3%B3n/@35.6684415,139.6007804,11z/data=!3m1!4b1!4m5!3m4!1s0x60188b857628235d:0xcdd8aef709a2b520!8m2!3d35.6803997!4d139.7690174";
    linkMapsa.style = "text-decoration: none;";
    let addClasslinkmpas = linkMapsa.classList.add("link__maps");
    linkMapsa.innerHTML = "Link de Maps";
    selectorFather.appendChild(linkMapsa);
    //console.log("removeLink");
  };

  /*funcion que agrega los iframe */
  const addItemLink = () => {
    const classLinkyoutube = d.querySelector(".link__youtube");
    selectorFather.removeChild(classLinkyoutube);
    let addIframeyoutube = selectorFather.appendChild(selectorYoutube);

    const classLinkmaps = d.querySelector(".link__maps");
    selectorFather.removeChild(classLinkmaps);
    let addIframemaps = selectorFather.appendChild(selectorMaps);
    //console.log(addIframeyoutube);
    //console.log("addLink");
  };
  //todo:resize que se encarga de mantener todo correcto en resposive y sin el
  w.addEventListener("resize", (e) => {
    linkYoutubematches = linkYoutube.matches;
    linkMapsmatches = linkMaps.matches;
    //console.log(linkMapsmatches);
    let comprobarExistenciayoutube = selectorYoutube.contains(
      d.querySelector(".youtube__link")
    );
    let comprobarExistenciamaps = selectorMaps.contains(
      d.querySelector(".maps__link")
    );
    //console.log(comprobarExistenciamaps);
    if (
      linkYoutubematches === true &&
      linkMapsmatches === true &&
      comprobarExistenciayoutube === true &&
      comprobarExistenciamaps === true
    ) {
      removeIframe();
    } else if (
      !linkYoutubematches === true &&
      !linkMapsmatches === true &&
      !comprobarExistenciayoutube === true &&
      !comprobarExistenciamaps === true
    ) {
      addItemLink();
    }
  });

  if (
    linkYoutubematches === true &&
    linkMapsmatches === true &&
    comprobarExistenciayoutube === true &&
    comprobarExistenciamaps === true
  ) {
    removeIframe();
  } else if (
    !linkYoutubematches === true &&
    !linkMapsmatches === true &&
    !comprobarExistenciayoutube === true &&
    !comprobarExistenciamaps === true
  ) {
    addItemLink();
  }
}
