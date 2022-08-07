import { GeneralResponse } from "../DatatTypes/Response/GeneralResponse";
import { ShopRequest } from "../DatatTypes/Request/ShopRequest";

export namespace BalanceQuery {
    
    export const processBalanceResult = async function(requestBody: ShopRequest): Promise<GeneralResponse> {
        console.log("REQ FUNCTION");
        console.log(requestBody);

        return new GeneralResponse();
    }
}