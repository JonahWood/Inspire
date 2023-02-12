export class Quote{
    constructor(data){
        this.quote = data.content
        this.author = data.author
    }
    get quoteTemp() {
        return`
        <h6 title="-${this.author}">${this.quote}</h6>
        `
    }
}