const d = document,
n = navigator;
export default function deteccionWebCam(params) {
  const video = d.getElementById("video");
  
  const constraints = {
    audio: true,
    video: {
      with: 720, height: 480
    }
  };

  //todo: acceso a la webcam
  //todo: mediaDevices es una interfaz que brinda acceso a dispositivos de entrada de medios conectados
  //todo: mediaDevices.getUserMedia() este metodo solicita permiso al usuario para usar un dispositivo de entrada de video y/o uno de audio
  async function init() {// esta es una funcion asincrona y significa que siempre devuelve una promesa
    // con esta funcion se dara cmomienzo a la api del metodo getUserMedia(); 
    try {//todo: cabe resaltar que el try..cath especifica un bloque de codigo para probar junto con una respuesta en caso de que ocurra un error
      const stream = await n.mediaDevices.getUserMedia(constraints);// este await literalmente suspende la ejecucion de la funcion hasta que se establece la promesa, y luego la reanuda con el resultado de la promesa
      handleSuccess(stream);
    } catch (e){
      errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
  }

  // Success
  function handleSuccess(stream) {//todo: esta funcion es para la transmision del video de la webcam
    window.stream = stream;
    video.srcObject = stream;
  }

  // Load init
  init();

  
  
};