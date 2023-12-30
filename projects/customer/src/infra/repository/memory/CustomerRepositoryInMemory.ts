import { Customer } from "../../../model/Customer";
import { CustomerRepository } from "../../../model/repository/CustomerRepository";

export class CustomerRepositoryInMemory implements CustomerRepository {

    private customerCollection: Array<Customer> = [];

    constructor() {}

    public async findAll(): Promise<Array<Customer>> {
        return this.customerCollection;
    }

    public async save(customer: Customer): Promise<void> {
        this.customerCollection.push(customer);
    }
}
