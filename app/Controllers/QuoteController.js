import { appState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _quote(){
    setHTML('quote', appState.quote.quoteTemp)
}

export class QuoteController{
    constructor(){
        console.log('quote controller checking in');
        appState.on('quote', _quote)
        this.getQuote()
    }


    async getQuote(){
        try {
            await quoteService.getQuote()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}