class Product {
    constructor(price){
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}


class ProductDiscount extends Product {

    constructor(price, discount){
        super(price)
        this.discount = discount
    }

    getPrice(){
        return this.discount * this.price;
    }
}