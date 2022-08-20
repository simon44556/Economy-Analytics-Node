import Express, {Response, NextFunction} from 'express';
import type  { ShopRequest } from '../DatatTypes/Request/ShopRequest';
import { BalanceQuery } from '../Requests/BalanceQuery';
import { Request } from '../Requests/Request';


export class RequestHandle {
    private _app: Express.Application;
    constructor(app: Express.Application) {
        this._app = app;
        this._app.use(Express.json());

        this.registerGETRequests();
        this.registerPOSTRequests();
    }

    registerGETRequests() {
        if(!this._app) {
            return;
        }

        this._app.get('/', (req: Request<ShopRequest>, res: Response, next: NextFunction) => {
            console.log(req.body);
            res.status(200).json({status: "Works"});
        })
    }

    registerPOSTRequests() {
        if(!this._app) {
            return;
        }

        this._app.post('/', function  (req: Request<ShopRequest>, res: Response, next: NextFunction)  {
            BalanceQuery.processBalanceResult(req.body);
            console.log("REQ BODY")
            console.log(req.body)
            console.log("REQ params")

            res.status(200).json({status: req.body});
        });
    }
}