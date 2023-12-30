import { Request, Response } from "express";
import { CustomerRepository } from "../model/repository/CustomerRepository";
import { Customer } from "../model/Customer";
import { CustomerDTO } from "../model/dto/CustomerDTO";
import { Uuid } from "../model/Uuid";

export class CustomerUpdate {
    readonly repository: CustomerRepository;

    constructor(repository: CustomerRepository) {
        this.repository = repository;
    }

    public async execute(request: Request, response: Response) {
        let id: string | Uuid = request.params.id;
        id = new Uuid(id);
        const { name, document } = request.body;
        const dto = new CustomerDTO(name, document);

        const customer: Customer = await this.repository.update(id, dto);
        response.status(201).json({ customer });
    }
}
