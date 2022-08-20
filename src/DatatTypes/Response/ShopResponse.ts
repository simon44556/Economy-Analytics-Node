import { GeneralResponse } from "./GeneralResponse";
import { User } from "../User"
import { Price } from "../Price"
import { Item } from "../Item"

export interface ShopResponse extends GeneralResponse {
    transactionTime: number;
    transactionTimeAsDate: Date;
    user: User;
    eventType: number; //TODO: Move to enum
    priceCalculation: Price;
    item: Item;
}