import { appState } from "../AppState.js";
import { imgService } from "../Services/ImgService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _img(){
    // NOTE check nasa
    // document.body.classList = 
    document.body.style.backgroundImage = appState.image.imgTemp
}

async function _pullImg(){
    try {
        await imgService.pullImg()
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}

export class ImgController{
    constructor(){
        appState.on('image', _img)
        _pullImg()
        console.log('img controller checking in');
    }

    // async pullImg(){
    //     try {
    //         await imgService.pullImg()
    //     } catch (error) {
    //         console.error(error)
    //         Pop.error(error)
    //     }
    // }
}