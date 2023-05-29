// controller envia resposta para usuario
import { todos, criar } from "../services/usuario.service"

const getAll = async (req, res)=> {
    const users = await todos();
    return res.status(200).json(users)
};

const createUser = async (req, res) => {
    const { email, senha } = req.body;
    console.log(email + "usuario controller")

    const user = await criar({email, senha});
    return res.status(200).json(user);   // retorna resposta do controller para o usuario
}

const login = async () => null;

export { getAll, login, createUser }
