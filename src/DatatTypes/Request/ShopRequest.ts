import { GeneralRequest } from "./GeneralRequest";
import { User } from "../User"
import { Item } from "../Item"

export interface ShopRequest extends GeneralRequest {
    forUser: User;
    forItem: Item;

    DateFrom: number | null;
    DateTo: number | null;

    forEventType: number | null; // TODO: Add enum
}