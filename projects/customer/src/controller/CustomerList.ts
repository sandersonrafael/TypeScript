import { Request, Response } from "express";
import { CustomerRepository } from "../model/repository/CustomerRepository";

export class CustomerList {

    private repository: CustomerRepository;

    constructor(repository: CustomerRepository) {
        this.repository = repository;
    }

    public async execute(request: Request, response: Response) {
        const customerCollection = await this.repository.findAll();
        return response.status(200).json({ customerCollection });
    }
}
