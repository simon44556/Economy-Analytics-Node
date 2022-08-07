"use strict";
class ShopResponse extends GeneralResponse {
    constructor(status, errorMessage, transactionTime, transactionTimeAsDate, user, eventType, priceCalculation, item) {
        super(status, errorMessage);
        this.transactionTime = transactionTime;
        this.transactionTimeAsDate = transactionTimeAsDate;
        this.user = user;
        this.eventType = eventType;
        this.priceCalculation = priceCalculation;
        this.item = item;
    }
}
