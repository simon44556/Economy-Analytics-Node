import Express from 'express';
import http from 'http';

import { RequestHandle } from './RequestHandler/RequestHandle'
import * as SQLConnector from './SQLConnector/SQLConnector';

const port: number = 3000;
const app: Express.Application = Express();

const requestHandle: RequestHandle = new RequestHandle(app); 
SQLConnector.init();

http.createServer(app).listen(port, () =>  
console.log(`Running at http://localhost:${port}/`));