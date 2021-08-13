import { createUser, findUser } from '../../../src/db/services/users';

export default async function userHandler(req, res) {
  const {
    body,
    method,
    query,
  } = req;

  switch (method) {
    case 'POST': {
      const resp = await createUser(body);
      res.status(201).json(resp);
      break;
    }
    case 'GET': {
      const resp = await findUser(query?.email);
      res.status(200).json(resp);
      break;
    }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
