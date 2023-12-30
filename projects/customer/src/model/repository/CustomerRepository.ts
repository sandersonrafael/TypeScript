import { Customer } from "../Customer";
import { Uuid } from "../Uuid";
import { CustomerDTO } from "../dto/CustomerDTO";

export interface CustomerRepository {

    findAll(): Promise<Array<Customer>>;
    findById(id: Uuid): Promise<Customer>;
    save(customer: Customer): Promise<void>;
    update(id: Uuid, dto: CustomerDTO): Promise<Customer>;
    delete(id: Uuid): Promise<void>;
}
