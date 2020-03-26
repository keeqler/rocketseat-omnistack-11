import db from '../database';

class IncidentController {
  async create(request, response) {
    const { title, description, value } = request.body;
    const { authorization: ongId } = request.headers;

    const [id] = await db('incidents').insert({
      title,
      description,
      value,
      ongId,
    });

    response.status(201).send({ id });
  }

  async index(request, response) {
    const { page } = request.query;

    const [count] = await db('incidents').count();
    const incidents = await db('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ongId')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.state',
      ]);

    response.header('X-Total-Count', count['count(*)']);
    response.send(incidents);
  }

  async delete(request, response) {
    const { id } = request.params;
    const ongId = request.headers.authorization;

    const incident = await db('incidents')
      .where({ id, ongId })
      .delete();

    if (incident) return response.sendStatus(204);

    return response.status(400).send({ error: 'Incident does not exist' });
  }
}

export default new IncidentController();
