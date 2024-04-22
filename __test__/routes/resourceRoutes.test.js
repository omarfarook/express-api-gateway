const request = require('supertest');
const server = require('../../server');

describe('Resource Routes', () => {
  describe('GET /api/resource', () => {
    it('should return status 200 and message', async () => {
      const response = await request(server).get('/api/resource');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: 'Resource accessed through API gateway',
      });
    });
  });

  describe('POST /api/resource', () => {
    it('should return status 200, message, and request data', async () => {
      const requestData = { key: 'value' };
      const response = await request(server)
        .post('/api/resource')
        .send(requestData);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: 'Resource created through API gateway',
        data: requestData,
      });
    });
  });
});
