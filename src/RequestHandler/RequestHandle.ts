import Express from 'express';
import { Request } from '../Requests/Request';
import type  { ShopRequest } from '../DatatTypes/Request/ShopRequest';

export class RequestHandle {
    private _app: Express.Application;

    constructor(app: Express.Application) {
        this._app = app;
        this.registerGETRequests();
        this.registerPOSTRequests();
    }

    registerGETRequests() {
        if(!this._app) {
            return;
        }
        this._app.get('/test', (req: Request<ShopRequest>, res: Express.Response, next: Express.NextFunction) => {
            res.status(200).json({status: "Works"});
        })
    }

    registerPOSTRequests() {
        if(!this._app) {
            return;
        }
        this._app.post('/balnaceQueries', (req: Request<ShopRequest>, res: Express.Response, next: Express.NextFunction) => {
            console.log(req);
            console.log(res);
            console.log(next);
            console.log("TEggST DATA :");
        })
    }
}