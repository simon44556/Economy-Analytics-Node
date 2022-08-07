"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralResponse_1 = require("./GeneralResponse");
class ShopResponse extends GeneralResponse_1.GeneralResponse {
    constructor(status, errorMessage, transactionTime, transactionTimeAsDate, user, eventType, priceCalculation, item) {
        super();
        this.transactionTime = transactionTime;
        this.transactionTimeAsDate = transactionTimeAsDate;
        this.user = user;
        this.eventType = eventType;
        this.priceCalculation = priceCalculation;
        this.item = item;
    }
}
