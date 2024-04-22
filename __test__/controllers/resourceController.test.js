// controllers/resourceController.test.js

const { get, create } = require('../../controllers/resourceController');

describe('Resource Controller', () => {
  describe('GET /api/resource', () => {
    it('should return a JSON object with message', () => {
      const req = {};
      const res = {
        json: jest.fn(),
      };
      get(req, res);
      expect(res.json).toHaveBeenCalledWith({ message: 'Resource accessed through API gateway' });
    });
  });

  describe('POST /api/resource', () => {
    it('should return a JSON object with message and request data', () => {
      const req = { body: { key: 'value' } };
      const res = {
        json: jest.fn(),
      };
      create(req, res);
      expect(res.json).toHaveBeenCalledWith({ message: 'Resource created through API gateway', data: { key: 'value' } });
    });
  });
});
