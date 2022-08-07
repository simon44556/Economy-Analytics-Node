"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRequest = void 0;
const GeneralRequest_1 = require("./GeneralRequest");
class ShopRequest extends GeneralRequest_1.GeneralRequest {
    constructor(token, forUser, forItem, DateFrom, DateTo, forEventType) {
        super(token);
        this.forUser = forUser;
        this.forItem = forItem;
        this.DateFrom = DateFrom;
        this.DateTo = DateTo;
        this.forEventType = forEventType;
    }
}
exports.ShopRequest = ShopRequest;
