import Users from '../db/models/users';

export const createUser = async (data) => {
  try {
    await Users.create(data);
  } catch (error) {
    console.log('erro ao criar usuário', error);
  }
};

export const findUser = async (email) => {
  try {
    const resp = await Users.findOne({ where: { email } });
    return resp;
  } catch (error) {
    console.log('erro ao buscar usuário', error);
    return error;
  }
};
