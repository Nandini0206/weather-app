window.addEventListener("load", function() {
  let lat;
  let long;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
    });
  }
});
