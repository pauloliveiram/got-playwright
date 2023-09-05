import { test, expect } from "@playwright/test";

test("Validar o método GET do endpoint /characters/{id}", async ({
  request,
}) => {
  const response = await request.get("/api/characters/823");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(responseBody.url).toContain(
    "https://www.anapioficeandfire.com/api/characters/",
  );
  expect(typeof responseBody.name).toBe("string");
  expect(typeof responseBody.gender).toBe("string");
  expect(typeof responseBody.culture).toBe("string");
  expect(typeof responseBody.born).toBe("string");
  expect(typeof responseBody.died).toBe("string");
  expect(Array.isArray(responseBody.titles)).toBe(true);
  expect(typeof responseBody.titles[0]).toBe("string");
  expect(Array.isArray(responseBody.aliases)).toBe(true);
  expect(typeof responseBody.aliases[0]).toBe("string");
  expect(typeof responseBody.father).toBe("string");
  expect(typeof responseBody.mother).toBe("string");
  expect(typeof responseBody.spouse).toBe("string");
  expect(Array.isArray(responseBody.allegiances)).toBe(true);
  expect(Array.isArray(responseBody.books)).toBe(true);
  expect(responseBody.books[0]).toContain(
    "https://www.anapioficeandfire.com/api/books/",
  );
  expect(Array.isArray(responseBody.povBooks)).toBe(true);
  expect(Array.isArray(responseBody.tvSeries)).toBe(true);
  expect(typeof responseBody.tvSeries[0]).toBe("string");
  expect(Array.isArray(responseBody.playedBy)).toBe(true);
  expect(typeof responseBody.playedBy[0]).toBe("string");
});
