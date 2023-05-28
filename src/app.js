import express from "express";
import routes from "./routes";

class App{
    constructor(){
        this.server = express();  // server recebe tudo do express
        this.middlewares(); // nome do metodo dentro da classe
        this.routes();  // nome do metodo dentro da classe
    }
    middlewares(){
        this.server.use(express.json()) // chama variavel server e usa expres.json para o req.body deprecada
    }
    routes(){
        this.server.use(routes);    // chama variavel server usa rota do routes
    }
}
export default new App().server