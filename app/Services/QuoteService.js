import { appState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { theApi } from "./AxiosService.js"


class QuoteService{


    async getQuote(){
        const res = await theApi.get('/quotes')
        const zeQuote = new Quote(res.data)
        appState.quote = zeQuote
    }
}


export const quoteService = new QuoteService