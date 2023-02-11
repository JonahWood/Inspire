import { setText } from "../Utils/Writer.js";
import { timeService } from '../Services/TimeService.js'



export class TimeController{
    constructor(){
        console.log('time controller checking in');
        setInterval(this.timeFunc, 1000)
        // setInterval(1000, console.log(time))
    }

    timeFunc(){
        timeService.timeFunc()
        // let time = new Date()
        // let temp = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
        // console.log('ze time:', time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds())
        // setText('time', temp)
    }

}