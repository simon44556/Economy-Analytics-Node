"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandle = void 0;
class RequestHandle {
    constructor(app) {
        this._app = app;
        this.registerGETRequests();
        this.registerPOSTRequests();
    }
    registerGETRequests() {
        if (!this._app) {
            return;
        }
        this._app.get('/test', (req, res, next) => {
            res.status(200).json({ status: "Works" });
        });
    }
    registerPOSTRequests() {
        if (!this._app) {
            return;
        }
        this._app.post('/balnaceQueries', (req, res, next) => {
            //const response = this.BalanceQuery.processBalanceResult(req.body);
            res.status(200).json({ status: "works" });
        });
    }
}
exports.RequestHandle = RequestHandle;
