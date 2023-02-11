import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { Pop } from "../Utils/Pop.js"
import { theApi } from "./AxiosService.js"


class WeatherService{
tempSwitch(){
    appState.Fahrenheit = !appState.Fahrenheit
}

async weather(){
    try {
        const res = await theApi.get("weather")
        const newWeather = new Weather(res.data)
        console.log('ws res', res.data);
        appState.weather = newWeather
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}
}


export const weatherService = new WeatherService