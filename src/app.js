import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();  // atribui funcionalidades de express em this.server
    this.middlewares(); // chama metodo middlewares da classe
    this.routes();  // chama metodo routes da classe
  }
  middlewares() {
    this.server.use(express.json());    // configura servidor para trabalhar com json
  }
  routes() {
    this.server.use(routes);  // this.server usa routes/index
  }
}

export default new App().server;
