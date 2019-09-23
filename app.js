window.addEventListener("load", function() {
  let lat;
  let long;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.darksky.net/forecast/55a4729d227ab7ca1bcc05dcbd75ff69/37.8267,-122.4233`
    });
  }
});
