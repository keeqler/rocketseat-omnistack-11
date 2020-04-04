import request from 'supertest';

import app from '../../src/app';
import db from '../../src/database';

describe('incident', () => {
  afterAll(async () => {
    await db.destroy();
  });

  it('should be able to create a new incident', async () => {
    const [id] = await db('ongs').insert({
      name: 'APAD',
      email: 'contato@apad.com',
      whatsapp: '12123451234',
      city: 'Somewhere',
      state: 'AA',
    });

    const response = await request(app)
      .post('/incidents')
      .send({ title: 'Test', description: 'Test', value: 1000 })
      .set({ authorization: id });

    expect(response.body).toHaveProperty('id');
  });

  it('should be able to list all incidents', async () => {
    const response = await request(app).get('/incidents?page=1');

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
        }),
      ])
    );
  });
});
