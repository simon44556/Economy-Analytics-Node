"use strict";
class ShopRequest extends GeneralRequest {
    constructor(token, forUser, forItem, DateFrom, DateTo, forEventType) {
        super(token);
        this.forUser = forUser;
        this.forItem = forItem;
        this.DateFrom = DateFrom;
        this.DateTo = DateTo;
        this.forEventType = forEventType;
    }
}
