import { Request, Response, Router } from "express";
//import { CustomerRepositoryInMemory } from "./infra/repository/memory/CustomerRepositoryInMemory";
import { CustomerCreate } from "./controller/CustomerCreate";
import { CustomerList } from "./controller/CustomerList";
import { CustomerFindById } from "./controller/CustomerFindById";
import { CustomerRepositoryDatabase } from "./infra/repository/database/CustomerRepositoryDatabase";

const router = Router();

// const repository = new CustomerRepositoryInMemory();
const repository = new CustomerRepositoryDatabase();
const customerList = new CustomerList(repository);
const customerFindById = new CustomerFindById(repository);
const customerCreate = new CustomerCreate(repository);

router.get("/customer", async (request: Request, response: Response) => {
    customerList.execute(request, response);
});

router.get("/customer/:id", async (request: Request, response: Response) => {
    customerFindById.execute(request, response);
});

router.post("/customer", async (request: Request, response: Response) => {
    customerCreate.execute(request, response);
});

export { router };
