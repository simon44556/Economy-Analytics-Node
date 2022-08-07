"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandle = void 0;
class RequestHandle {
    constructor(app) {
        this._app = app;
        this.registerRequests();
    }
    registerRequests() {
        if (!this._app) {
            return;
        }
        this._app.get('/testdata', (req, res, next) => {
            console.log("TEggST DATAs :");
        });
    }
}
exports.RequestHandle = RequestHandle;
