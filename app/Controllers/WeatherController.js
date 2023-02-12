import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { setHTML } from "../Utils/Writer.js";



function _drawWeather(){
    const weather = appState.weather
    const template = appState.Fahrenheit ? weather.weatherTempF : weather.weatherTempC
    setHTML('weather', template)
}

export class WeatherController{
    constructor(){
        console.log('weather controller checking in')
        _drawWeather()
        appState.on('Fahrenheit', _drawWeather)
        appState.on('weather', _drawWeather)
        weatherService.weather()
    }

    tempSwitch(){
        weatherService.tempSwitch()
    }
}