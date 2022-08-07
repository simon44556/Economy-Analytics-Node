"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyRequest = void 0;
const GeneralRequest_1 = require("./GeneralRequest");
class EmptyRequest extends GeneralRequest_1.GeneralRequest {
    constructor(token) {
        super(token);
    }
}
exports.EmptyRequest = EmptyRequest;
