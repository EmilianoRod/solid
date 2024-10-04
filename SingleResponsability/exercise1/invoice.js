
calculateTax(country){
    if(country === USA){
        return this.price * USA_TAX;
    }else if(country === CANADA){
        return this.price * CANADA_TAX;
    }else{
        throw new Error("Unsupported country")
    }
}