document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
  const apiKey = 'YOUR_API_KEY';
  const city = 'London';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById('weatherData').textContent =
        `Current weather in London: ${weather}`;
    })
    .catch(error => {
      document.getElementById('weatherData').textContent =
        `Error fetching weather: ${error.message}`;
    });
}
