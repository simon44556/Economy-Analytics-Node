import Express from 'express';
import { Request } from '../Requests/Request';
import type  { ShopRequest } from '../DatatTypes/Request/ShopRequest';
import { BalanceQuery } from '../Requests/BalanceQuery';


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
        this._app.post('/balnaceQueries', function  (req: Express.Request, res: Express.Response/*, next: Express.NextFunction*/)  {
            //BalanceQuery.processBalanceResult(req.body);
            console.log(req.body)
            const { token } = req.body;
            console.log({ token })

            res.status(200).json({status:"works"});
        });
    }
}