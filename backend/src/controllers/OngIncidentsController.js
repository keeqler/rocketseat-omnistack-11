import db from '../database';

class OngIncidentsController {
  async index(request, response) {
    const { authorization: ongId } = request.headers;

    const incidents = await db('incidents')
      .where({ ongId })
      .select('*');

    response.send(incidents);
  }
}

export default new OngIncidentsController();
