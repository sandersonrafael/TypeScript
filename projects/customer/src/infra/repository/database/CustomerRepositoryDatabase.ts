import knex, { Knex } from "knex";
import { Customer } from "../../../model/Customer";
import { CustomerRepository } from "../../../model/repository/CustomerRepository";
import { development } from "./KnexConfig";
import { Uuid } from "../../../model/Uuid";
import { CustomerDTO } from "../../../model/dto/CustomerDTO";

export class CustomerRepositoryDatabase implements CustomerRepository {
    private connection: Knex;

    constructor() {
        this.connection = knex(development);
    }

    public async findAll(): Promise<Array<Customer>> {
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

    public async findById(id: Uuid): Promise<Customer> {
        const customerDb = await this.connection("customer")
            .select("*")
            .where({ "id": id.getValue() })
            .limit(1);

        if (!customerDb) {
            throw new Error("Usuário não encontrado!");
        }

        const customer: Customer = Customer.create(
            customerDb[0]["name"],
            customerDb[0]["document"],
            customerDb[0]["id"],
        );

        return customer;
    }

    public async save(customer: Customer): Promise<void> {
        await this.connection("customer").insert({
            "id": customer.getId().getValue(),
            "name": customer.getName(),
            "document": customer.getDocument().getValue(),
        });
    }

    public async update(id: Uuid, dto: CustomerDTO): Promise<Customer> {
        await this.connection("customer").where({
            "id": id.getValue(),
        }).update({
            "name": dto.getName(),
            "document": dto.getDocument(),
        });

        const customer: Customer = await this.findById(id);
        return customer;
    }

    public async delete(id: Uuid): Promise<void> {
        await this.connection("customer")
            .delete("*")
            .where({ "id": id.getValue() });
    }
}
