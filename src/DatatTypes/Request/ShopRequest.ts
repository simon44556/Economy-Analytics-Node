import { GeneralRequest } from "./GeneralRequest";

export class ShopRequest extends GeneralRequest {
    forUser: User;
    forItem: Item;

    DateFrom: number | null;
    DateTo: number | null;

    forEventType: number | null; // TODO: Add enum

    constructor(token: string, forUser: User, forItem: Item, DateFrom: number, DateTo: number, forEventType: number) {
        super(token);

        this.forUser = forUser;
        this.forItem = forItem;
        this.DateFrom = DateFrom;
        this.DateTo = DateTo;
        this.forEventType = forEventType;
    }
}