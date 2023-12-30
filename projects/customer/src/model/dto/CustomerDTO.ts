export class CustomerDTO {
    readonly name: string;
    readonly document: string;

    constructor(name: string, document: string) {
        this.name = name;
        this.document = document;
    }

    public getName(): string {
        return this.name;
    }

    public getDocument(): string {
        return this.document;
    }
}
