# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Weather Forecast Project

This is a barebones version that currently just shows a temperature chart in Kelvin.
To enable the OpenWeather API functionalities, you'll need to include a .env file in the project's root directory, with a following line:

REACT_APP_OPEN_WEATHER_API_KEY={YOUR_API_KEY}

Where YOUR_API_KEY is your OpenWeather API key.

TODOs:
- [] replace line chart with an area chart
- [] add language locale support
- [] display data in user friendly units, pickable by user
- [] add location autocomplete in searchbar
- [] add multiple search types, as per openweather API
  - [] display controls in a dynamic manner
