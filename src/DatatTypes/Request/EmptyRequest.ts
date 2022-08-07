import { GeneralRequest } from './GeneralRequest'

export class EmptyRequest extends GeneralRequest {
    constructor(token: string) {
        super(token);
    }
}