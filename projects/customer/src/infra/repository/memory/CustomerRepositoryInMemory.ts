import { Customer } from "../../../model/Customer";
import { Uuid } from "../../../model/Uuid";
import { CustomerDTO } from "../../../model/dto/CustomerDTO";
import { CustomerRepository } from "../../../model/repository/CustomerRepository";

export class CustomerRepositoryInMemory implements CustomerRepository {

    private customerCollection: Array<Customer> = [];

    constructor() {}

    public async findAll(): Promise<Array<Customer>> {
        return this.customerCollection;
    }

    findById(id: Uuid): Promise<Customer> {
        throw new Error("Method not implemented." + id);
    }

    public async save(customer: Customer): Promise<void> {
        this.customerCollection.push(customer);
    }

    update(id: Uuid, dto: CustomerDTO): Promise<Customer> {
        throw new Error("Method not implemented." + id + dto);
    }

    delete(id: Uuid): Promise<void> {
        throw new Error("Method not implemented." + id);
    }
}
