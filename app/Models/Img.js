export class Img {
    constructor(data) {
        this.img = data.largeImgUrl
        this.author = data.author
}

get imgTemp(){
    return`
    url(${this.img})
    `
}

get authorTemp(){
    return`
    
    `
} 
}