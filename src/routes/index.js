import { Router } from 'express';
import { getAll, createUser } from '../controllers/usuario.controller';

const routes = new Router(); // instancia router() permite usar o get para chamar a rota

routes.get('/', (req, res) => {
    res.status(200).json({ ok: 'connected' });
})

routes.get('/usuario', getAll);

routes.post('/usuario', createUser);

export default routes;
