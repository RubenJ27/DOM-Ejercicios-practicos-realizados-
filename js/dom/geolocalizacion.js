const d = document,
n = navigator;

export default function geolocalizacion(params) {
  const $status = d.querySelector('#status');
  const $mapLink = d.querySelector('#map-link')
  const $presicion = d.querySelector('#presicion'),
  options = {
    enableHighAccuracy:true,
    timeout: 5000,
    maximumAge: 0
  };

  $mapLink.href = '';
  $presicion.textContent = '';
  $mapLink.textContent = '';

  function sucess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const precision = position.coords.accuracy;

    $status.textContent = '';
    $status.textContent = `Latitude: ${latitude} °,
    Longitude: ${longitude} °`;

    $presicion.textContent = `Presicion: ${precision} metros`

    $mapLink.href = `http://www.google.com/maps/@${latitude},${longitude},20z`;
    $mapLink.textContent = `Si quiere saber la ubicacion en el mapa por favor de click aqui`;
  }
  function error(err) {
    $status.textContent = `Error: ${err.code}: ${err.message}`;
  }
  if (!navigator.geolocation) {
    $status.textContent = 'Geolocation is not supported by your browser';
  }

  navigator.geolocation.getCurrentPosition(sucess, error, options);
}

