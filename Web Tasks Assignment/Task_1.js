
function getWeather(city) {
    const apiKey = "dab6b8ae81304a57968123312241611"; // Replace with your OpenWeatherMap API key
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  
    return fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        return {
          temperature: data.main.temp,
          condition: data.weather[0].description,
        };
      });
  }
  






// // Fetch weather data from OpenWeatherMap API



// function getWeather(city) {
//   const apiKey = "dab6b8ae81304a57968123312241611"; // Replace with your API key
//   const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

//   return fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`)
//       .then((response) => {
//           if (!response.ok) {
//               throw new Error("City not found or API error. Please try again.");
//           }
//           return response.json();
//       })
//       .then((data) => {
//           return {
//               temperature: data.main.temp,
//               condition: data.weather[0].description,
//               city: data.name,
//           };
//       });
// }

// // Function to update the weather info on the webpage
// function updateWeatherInfo(weather) {
//   const weatherInfoDiv = document.getElementById("weatherInfo");
//   weatherInfoDiv.innerHTML = `
//       <h2>Weather in ${weather.city}</h2>
//       <p>Temperature: ${weather.temperature}°C</p>
//       <p>Condition: ${weather.condition}</p>
//   `;
// }

// // Function to display an error message
// function displayError(message) {
//   const weatherInfoDiv = document.getElementById("weatherInfo");
//   weatherInfoDiv.innerHTML = `<p style="color: red;">${message}</p>`;
// }

// // Event listener for the button
// document.getElementById("getWeatherBtn").addEventListener("click", () => {
//   const cityInput = document.getElementById("cityInput").value.trim();

//   if (!cityInput) {
//       displayError("Please enter a city name.");
//       return;
//   }

//   getWeather(cityInput)
//       .then(updateWeatherInfo)
//       .catch((error) => displayError(error.message));
// });
