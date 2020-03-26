import db from '../database';

class OngController {
  async store(request, response) {
    const { name, email, whatsapp, state, city } = request.body;

    const [id] = await db('ongs').insert({
      name,
      email,
      whatsapp,
      state,
      city,
    });

    response.status(201).send({ id });
  }
}

export default new OngController();
