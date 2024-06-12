function initMap() {
  // Coordenadas del mapa (extraídas del enlace proporcionado)
  var mapaCoordenadas = { lat: -34.6132175, lng: -58.3772304 };
  // Opciones del mapa
  var mapaOpciones = {
      center: mapaCoordenadas,
      zoom: 15 // Ajusta el nivel de zoom según sea necesario
  };
  // Crear el mapa
  var map = new google.maps.Map(document.getElementById('map'), mapaOpciones);
  // Marcador en las coordenadas del mapa
  var marker = new google.maps.Marker({
      position: mapaCoordenadas,
      map: map,
      title: 'Ubicación del Restaurante'
  });
}