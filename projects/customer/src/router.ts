import { Request, Response, Router } from "express";
//import { CustomerRepositoryInMemory } from "./infra/repository/memory/CustomerRepositoryInMemory";
import { CustomerCreate } from "./controller/CustomerCreate";
import { CustomerList } from "./controller/CustomerList";
import { CustomerRepositoryDatabase } from "./infra/repository/database/CustomerRepositoryDatabase";

const router = Router();

// const repository = new CustomerRepositoryInMemory();
const repository = new CustomerRepositoryDatabase();
const customerList = new CustomerList(repository);
const customerCreate = new CustomerCreate(repository);

router.get("/customer", async (request: Request, response: Response) => {
    customerList.execute(request, response);
});

router.post("/customer", async (request: Request, response: Response) => {
    customerCreate.execute(request, response);
});

export { router };
