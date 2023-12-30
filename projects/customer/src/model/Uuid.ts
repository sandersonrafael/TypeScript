import { v4, validate } from "uuid";

export class Uuid {
    private value: string;

    constructor(value: string) {
        if (!validate(value)) throw new Error("UUID inválido");

        this.value = value;
    }

    public static generateUuid(): Uuid {
        return new Uuid(v4());
    }
}
