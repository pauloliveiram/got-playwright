import { test, expect } from '@playwright/test';

test('Validar o método GET do endpoint /books/{id}', async ({ request }) => {
  const response = await request.get("/api/books/1");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(responseBody.url).toContain("https://www.anapioficeandfire.com/api/books/");
  expect(typeof responseBody.name).toBe("string");
  expect(typeof responseBody.isbn).toBe("string");
  expect(Array.isArray(responseBody.authors)).toBe(true);
  expect(typeof responseBody.authors[0]).toBe("string");
  expect(typeof responseBody.numberOfPages).toBe("number");
  expect(typeof responseBody.publisher).toBe("string");
  expect(typeof responseBody.country).toBe("string");
  expect(typeof responseBody.mediaType).toBe("string");
  expect(typeof responseBody.released).toBe("string");
  expect(Array.isArray(responseBody.characters)).toBe(true);
  expect(responseBody.characters[0]).toContain("https://www.anapioficeandfire.com/api/characters/");
  expect(Array.isArray(responseBody.povCharacters)).toBe(true);
  expect(responseBody.povCharacters[0]).toContain("https://www.anapioficeandfire.com/api/characters/");
});