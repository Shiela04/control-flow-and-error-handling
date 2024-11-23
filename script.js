// import node-fetch
const fetch = require("node-fetch");

const api_key = "93426847adde4ab59aae459329223b60";
const City = "Calgary";

// fetch weather data
async function getWeatherData() {
  const url = `https://api.weatherbit.io/v2.0/current?city=${City}&key=${api_key}`;

  try {
    const response = await fetch(url);

    // check if response is okay
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    const data = await response.json();
    processWeatherData(data);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
}

// function to process and displaydata
function processWeatherData(data) {
  try {
    if (!data || !data.data || !data.data[0]) {
      throw new Error("Invalid data format");
    }
    const weather = data.data[0];
    const city = weather.city_name;
    const temperature = weather.temp;
    const description = weather.weather.description;

    console.log(`Weather in ${city}`);
    console.log(`Temperature: ${temperature}`);
    console.log(`Weather Description: ${description}`);
  } catch (error) {
    console.error("Error processing weather data", error.message);
  }
}

// fetch weather data
getWeatherData();
