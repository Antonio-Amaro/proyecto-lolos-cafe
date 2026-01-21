
export class Product {
    constructor(name, price, category, description) {
        this.id = Date.now()
        this.name = name
        this.price = price
        this.category = category
        this.description = description
    }
}