export class Listing {
    constructor(title, pay, description) {
         this.title = title
         this.pay = pay
         this.description = description
        this.interested = []
    }
    render(){
        let li = document.createElement('li')
    li.innerHTML = `
        <h3>${this.title}</h3>
        <small>${this.pay}</small>
        <p>${this.description}</p>
        <small>${this.interested.length} dinosaurs are interested in this job
        `
        return li
    }
}
