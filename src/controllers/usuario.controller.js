import {
  todos, criar, deletar, atualizar,
} from '../services/usuario.services';

const getAll = async (req, res) => {
  const users = await todos();
  const id = '_id';
  const newList = users.map((user) => (
    {
      email: user.email,
      _id: user[`${id}`],
    }
  ));
  return res.status(200).json(newList); // retorna newlist manipulada no map
};

const createUser = async (req, res) => {
  const { email, senha } = req.body;

  const { email: mail, _id } = await criar({ email, senha });
  return res.status(200).json({ mail, _id });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await deletar({ id });
  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { email, senha } = req.body;
  const { id } = req.params;

  const user = await atualizar({ id, email, senha });
  res.status(200).json(user);
};

const login = async () => null;

export {
  getAll, login, createUser, deleteUser, updateUser,
};
