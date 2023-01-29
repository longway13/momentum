const API_KEY =
  "dad2ed74347fe3017c8e7c8acbd5d584";
const weatherData =
  document.querySelector(".temp");
const locationData =
  document.querySelector(".location");

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherData.innerText = `${data.weather[0].main} ${data.main.temp}`;
      locationData.innerText = `${data.sys.country} ${data.name}`;
    });
};
const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(
  onGeoOk,
  onGeoError
);
