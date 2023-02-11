import { appState } from "../AppState.js"
import { Img } from "../Models/Img.js"
import { theApi } from "./AxiosService.js"


class ImgService{
async pullImg(){
const res = await theApi.get('/images')
const img = new Img(res.data)
appState.image = img
}
    
}


export const imgService = new ImgService