import { setText } from "../Utils/Writer.js"

class TimeService{
timeFunc(){
    // let time = new Date()
    //     let temp = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    //     console.log('ze time:', time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds())
    //     setText('time', temp)


//ANCHOR - vvvvv-Adds 0's-vvvvvv 

    let time = new Date();
    let temp =
        ("0" + time.getHours()).slice(-2)   + ":" + 
        ("0" + time.getMinutes()).slice(-2) + ":" + 
        ("0" + time.getSeconds()).slice(-2)
        setText('time', temp)
}
}

export const timeService = new TimeService