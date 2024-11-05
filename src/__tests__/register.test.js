import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/auth/register';
import User from '../db/models/User';
import { connectDB } from '../db/connectDB';
import { hash } from 'bcryptjs';

jest.mock('../db/connectDB');
jest.mock('../db/models/User');
jest.mock('bcryptjs');

describe('/api/auth/register API Endpoint', () => {
  beforeAll(() => {
    connectDB.mockResolvedValue({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      },
    });

    User.findOne.mockResolvedValue(null);
    hash.mockResolvedValue('hashedpassword');
    User.create.mockResolvedValue({
      username: 'testuser',
      email: 'test@example.com',
      password: 'hashedpassword',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ message: 'User created successfully' });
  });

  it('should return 409 if user already exists', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      },
    });

    User.findOne.mockResolvedValue({ email: 'test@example.com' });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(409);
    expect(res._getJSONData()).toEqual({ error: 'User already exists' });
  });

  it('should return 400 if validation fails', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        username: '',
        email: 'invalid-email',
        password: '123',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData()).toHaveProperty('errors');
  });
});