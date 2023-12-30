import { Customer } from "../Customer";

export interface CustomerRepository {

    findAll(): Promise<Array<Customer>>;

    save(customer: Customer): Promise<void>;
}
