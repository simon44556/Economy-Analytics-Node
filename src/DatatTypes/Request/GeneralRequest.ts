export abstract class GeneralRequest {
    token: string;

    constructor(token: string) {
        this.token = token;
    }

    validateToke(): boolean {
        return true;
    }
}