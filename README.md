# Weather Fetcher Challenge

This challenge assignment fetches current weather data for a specified city using the Watherbit.io API. It uses node-fetch to get the data, processes it, and logs the result to the console.

## Broken code in brokenScript.js

- Invalid City
- Incorrect path to access weather description (change city to a valid one)

## Resources

- Weather API: [Watherbit.io](https://www.weatherbit.io/)
- Script: Code was adapted from the [weather API mini project](https://github.com/Shiela04/cpnt262-api-project.git) that I did but modified the script to align with the requirements of this assignment.

## Setup

1. Clone the repository:
   - git clone [https://github.com/Shiela04/control-flow-and-error-handling.git]
2. Install dependencies in the terminal:
   - npm install -y
3. Replace <api_key> in script.js with your own API key from Weatherbit.io
4. Change the value of the city in line 5
5. Run the script:
   - node script.js

## Self Reflection

I had to install the version 2 of node-fetch because it works with the require syntax. The require syntax doesn't work with versions starting from 3.
