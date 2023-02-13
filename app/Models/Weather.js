export class Weather{
    constructor(data){
        this.temp = data.main.temp
        this.icon = data.weather[0].icon
    }

    get weatherTempF(){
        return`
        <h2 onclick="app.weatherController.tempSwitch()">${Math.ceil(((this.temp - 273.15)*9/5)+32)}°F in Boise</h2>
        `
    }
    get weatherTempC(){
        return`
        <h2 onclick="app.weatherController.tempSwitch()">${ Math.ceil(this.temp - 273.15)}°C in Boise</h2>
        `
    }
}