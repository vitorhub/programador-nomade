import { getAll, newUser, userExists } from '../models/usuario.model';

const todos = async () => {
    const users = await getAll(); // Esta função ta retorn todos usuar de model que comunicou com bd
    return users;
};

const criar = async ({ email, senha }) => {
  const usuario = await userExists({ email });
    console.log(usuario + "bundinha")
  if (usuario) return usuario;
  const user = await newUser({ email, senha });
  return user;
};

const login = async () => null;

export { todos, login, criar }; // enviar todos para o controller
