import request from 'supertest';
import server from '../../server';

it('raises a NotFoundError when no endpoints is found', async () => {
  const response = await request(server).get('/uwahdkjakwdw213123');

  expect(response.statusCode).toEqual(404);
  expect(response.body).toEqual({ errors: [{ message: 'Not Found' }] });
});
