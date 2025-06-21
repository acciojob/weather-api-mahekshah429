document.getElementById("getWeather").addEventListener("click", () => {
  const apiKey = "e467712b257e418838be97cc881a71de"; // Your API key
  const city = "London,uk";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const mainWeather = data.weather[0].main;
      document.getElementById("weatherData").innerText = `Current weather in London: ${mainWeather}`;
    })
    .catch(error => {
      document.getElementById("weatherData").innerText = "Failed to load weather data.";
      console.error("Error fetching weather:", error);
    });
});