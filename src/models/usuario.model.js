import connection from './mongoConnection'
import { v4 as newUuid } from 'uuid';

const getAll = async () => {
    const db = await connection(); // chama conexão do banco de dados
    return db.collection('usuarios').find().toArray() // depois do await seleciona coleção usuarios, find tudo, converte em array
}

const newUser = async ({email, senha}) => {
    const db = await connection(); // fazendo conexão com o banco
    const uuid = newUuid(); // gerndo uid
    await db.collection('usuarios').insertOne({email, senha, uuid}) // criando um usuario no banco
    return {email , uuid}; // retornando para service que está chamando
}

const userExists = async ({ email, uuid }) => {
    console.log( email + "peitinho" );
    const db = await connection(); // chama conexão do banco de dados
    let user = null;
    if(uuid) {
        user = await db.collection('usuarios').findOne(uuid); // user recebe db.coleção. encontra um uuid
    }else {
        user = await db.collection('usuarios').findOne(email);
    }
    return user;
}

const login = async () => null;

export { getAll, login, newUser, userExists };
