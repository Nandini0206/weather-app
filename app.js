window.addEventListener("load", function() {
  let lat;
  let long;
  let tempDescription = document.querySelector('.temp-description');
  let tempDegree = document.querySelector('.temp-degree');
  let locationTimezone = document.querySelector('.location-timezone');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = `https://cors-anywhere.herokuapp.com/`;
      const api = `${proxy}https://api.darksky.net/forecast/55a4729d227ab7ca1bcc05dcbd75ff69/${lat},${long}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const {temperature, summary } = data.currently;
        });
    });
  }
});
