import { createUser } from '../../../src/services/users';

export default async function userHandler(req, res) {
  const {
    query,
    method,
  } = req;

  switch (method) {
    case 'POST': {
      const id = await createUser(query);
      res.status(200).json({ id, name: query.name || `User ${id}` });
      break;
    }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
