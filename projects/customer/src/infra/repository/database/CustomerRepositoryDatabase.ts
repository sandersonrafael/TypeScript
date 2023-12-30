import knex, { Knex } from "knex";
import { Customer } from "../../../model/Customer";
import { CustomerRepository } from "../../../model/repository/CustomerRepository";
import { development } from "./KnexConfig";

export class CustomerRepositoryDatabase implements CustomerRepository {
    private connection: Knex;

    constructor() {
        this.connection = knex(development);
    }

    public async findAll(): Promise<Customer[]> {
        const customerCollection: Array<Customer> = [];
        const customersDb = await this.connection("customer").select("*");

        customersDb.forEach((customer) => {
            const id = customer["id"];
            const name = customer["name"];
            const document = customer["document"];

            customerCollection.push(Customer.create(name, document, id));
        });

        return customerCollection;
    }

    public async save(customer: Customer): Promise<void> {
        await this.connection("customer").insert({
            "id": customer.getId().getValue(),
            "name": customer.getName(),
            "document": customer.getDocument().getValue(),
        });
    }
}
