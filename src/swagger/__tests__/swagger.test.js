import request from 'supertest';
import server from '../../server';

it('returns a 200 status code', async () => {
  const response = await request(server).get('/api-docs/');

  expect(response.statusCode).toEqual(200);
});
