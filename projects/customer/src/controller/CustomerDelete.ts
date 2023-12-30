import { Request, Response } from "express";
import { CustomerRepository } from "../model/repository/CustomerRepository";
import { Uuid } from "../model/Uuid";

export class CustomerDelete {

    private repository: CustomerRepository;

    constructor(repository: CustomerRepository) {
        this.repository = repository;
    }

    public async execute(request: Request, response: Response) {
        let id: string | Uuid = request.params.id;
        id = new Uuid(id);
        await this.repository.delete(id);
        return response.status(200).json();
    }
}
