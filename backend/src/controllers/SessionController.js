import db from '../database';

class SessionController {
  async store(request, response) {
    const { id } = request.body;

    const ong = await db('ongs')
      .where({ id })
      .select('name')
      .first();

    if (!ong)
      return response
        .status(401)
        .send({ error: 'Could not find an ONG with that ID' });

    response.send(ong);
  }
}

export default new SessionController();
