// src/__tests__/books.test.js
import { createMocks } from "node-mocks-http";
import handler from "../pages/api/books";
import Book from "../db/models/Book";
import { connectDB } from "../db/connectDB";

jest.mock("../db/connectDB");
jest.mock("../db/models/Book");

describe("/api/books API Endpoint", () => {
  beforeAll(() => {
    connectDB.mockResolvedValue({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new book", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        title: "Test Book",
        author: "Test Author",
        translator: "Test Translator",
        description: "Test Description",
        publicationDate: "2023-01-01",
        editor: "Test Editor",
        ISBN: "1234567890",
        EAN: "1234567890123",
        numberPage: 100,
        price: 19.99,
      },
    });

    Book.create.mockResolvedValue({
      title: "Test Book",
      author: "Test Author",
      translator: "Test Translator",
      description: "Test Description",
      publicationDate: "2023-01-01",
      editor: "Test Editor",
      ISBN: "1234567890",
      EAN: "1234567890123",
      numberPage: 100,
      price: 19.99,
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(res._getJSONData()).toEqual({
      title: "Test Book",
      author: "Test Author",
      translator: "Test Translator",
      description: "Test Description",
      publicationDate: "2023-01-01",
      editor: "Test Editor",
      ISBN: "1234567890",
      EAN: "1234567890123",
      numberPage: 100,
      price: 19.99,
    });
  });

  it("should return 400 if validation fails", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        title: "",
        author: "",
        description: "",
        publicationDate: "invalid-date",
        editor: "",
        ISBN: "",
        EAN: "",
        numberPage: -1,
        price: -1,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData()).toHaveProperty("errors");
  });

  it("should return a list of books", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    Book.find.mockResolvedValue([
      {
        title: "Test Book",
        author: "Test Author",
        translator: "Test Translator",
        description: "Test Description",
        publicationDate: "2023-01-01",
        editor: "Test Editor",
        ISBN: "1234567890",
        EAN: "1234567890123",
        numberPage: 100,
        price: 19.99,
      },
    ]);

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual([
      {
        title: "Test Book",
        author: "Test Author",
        translator: "Test Translator",
        description: "Test Description",
        publicationDate: "2023-01-01",
        editor: "Test Editor",
        ISBN: "1234567890",
        EAN: "1234567890123",
        numberPage: 100,
        price: 19.99,
      },
    ]);
  });

  it("should return 404 if book not found", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "nonexistent-id",
      },
    });

    Book.findById.mockResolvedValue(null);

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    expect(res._getJSONData()).toEqual({ error: "Book not found" });
  });
});
