import { Document } from "./Document";

export class Cpf implements Document {
    private value: string;

    constructor(value: string) {
        if (!Cpf.isValid(value)) throw new Error("CPF inválido");

        this.value = value;
    }

    public static isValid(value: string): boolean {
        return value.length === 11;
    }

    public getDocument(): Document {
        return this;
    }

    public getValue(): string {
        return this.value;
    }
}
