export class Price {
    amount: number;
    price: number;
    priceForOne: number;

    constructor(amount: number, price: number, priceForOne: number) {
        this.amount = amount;
        this.price = price;
        this.priceForOne = priceForOne;
    }
}