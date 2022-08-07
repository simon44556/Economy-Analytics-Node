import { GeneralResponse } from "./GeneralResponse";
import { User } from "../User"
import { Price } from "../Price"
import { Item } from "../Item"

export class ShopResponse extends GeneralResponse {
    transactionTime: number;
    transactionTimeAsDate: Date;

    user: User;

    eventType: number; //TODO: Move to enum

    priceCalculation: Price;

    item: Item;


    constructor(status: number, errorMessage: string, transactionTime: number, transactionTimeAsDate: Date, user: User, eventType: number, priceCalculation: Price, item: Item) {
        super();

        this.transactionTime = transactionTime;
        this.transactionTimeAsDate = transactionTimeAsDate;
        this.user = user;
        this.eventType = eventType;
        this.priceCalculation = priceCalculation;
        this.item = item;
    }
}