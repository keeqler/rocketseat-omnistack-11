import request from 'supertest';

import app from '../../src/app';
import db from '../../src/database';

describe('ong', () => {
  afterAll(async () => {
    await db.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'APAD',
      email: 'contato@apad.com',
      whatsapp: '12123451234',
      city: 'Somewhere',
      state: 'AA',
    });

    expect(response.body).toHaveProperty('id');
  });
});
