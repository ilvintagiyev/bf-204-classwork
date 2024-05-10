class Product {
    constructor(name, price, description) {
        this.id = Date.now(),
            this.name = name,
            this.price = price,
            this.description = description
    }
}
export default Product