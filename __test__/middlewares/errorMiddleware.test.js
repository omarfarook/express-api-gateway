const errorMiddleware = require('../../middlewares/errorMiddleware');

describe('Error Middleware', () => {
  it('should log error and send status 500 with error message', () => {
    const err = new Error('Test error');
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    errorMiddleware(err, req, res, next);

    expect(consoleErrorSpy).toHaveBeenCalledWith(`ERROR: ${err.stack}`);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });

    consoleErrorSpy.mockRestore();
  });
});
