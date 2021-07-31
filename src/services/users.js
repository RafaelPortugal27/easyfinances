import models from '../db/models';

export const createUser = async (data) => {
  try {
    await models.User.create(data);
  } catch (error) {
    console.log('erro ao criar usuário', error);
  }
};

export const findUser = async (email) => {
  return {};
};
