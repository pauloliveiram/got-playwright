import { test, expect } from "@playwright/test";

test("Validar o método GET do endpoint /books", async ({ request }) => {
  const response = await request.get("/api/books");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(responseBody[0].url).toContain(
    "https://www.anapioficeandfire.com/api/books/",
  );
  expect(typeof responseBody[0].name).toBe("string");
  expect(typeof responseBody[0].isbn).toBe("string");
  expect(Array.isArray(responseBody[0].authors)).toBe(true);
  expect(typeof responseBody[0].authors[0]).toBe("string");
  expect(typeof responseBody[0].numberOfPages).toBe("number");
  expect(typeof responseBody[0].publisher).toBe("string");
  expect(typeof responseBody[0].country).toBe("string");
  expect(typeof responseBody[0].mediaType).toBe("string");
  expect(typeof responseBody[0].released).toBe("string");
  expect(Array.isArray(responseBody[0].characters)).toBe(true);
  expect(responseBody[0].characters[0]).toContain(
    "https://www.anapioficeandfire.com/api/characters/",
  );
  expect(Array.isArray(responseBody[0].povCharacters)).toBe(true);
  expect(responseBody[0].povCharacters[0]).toContain(
    "https://www.anapioficeandfire.com/api/characters/",
  );
});
