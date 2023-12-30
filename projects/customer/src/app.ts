import express, { Application, json } from "express";
import { router } from "./router";

export class App {
    private server: Application;

    constructor() {
        this.server = express();
        this.server.use(json());
        this.server.use(router);
    }

    public getServer(): Application {
        return this.server;
    }
}
