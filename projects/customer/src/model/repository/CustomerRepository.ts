import { Customer } from "../Customer";
import { Uuid } from "../Uuid";

export interface CustomerRepository {

    findAll(): Promise<Array<Customer>>;
    findById(id: Uuid): Promise<Customer>;
    save(customer: Customer): Promise<void>;
}
