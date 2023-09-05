import { test, expect } from '@playwright/test';

test("Validar o método GET do endpoint /characters", async ({ request }) => {
  const response = await request.get("/api/characters");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(responseBody[0].url).toContain("https://www.anapioficeandfire.com/api/characters/");
  expect(typeof responseBody[0].name).toBe("string");
  expect(typeof responseBody[0].gender).toBe("string");
  expect(typeof responseBody[0].culture).toBe("string");
  expect(typeof responseBody[0].born).toBe("string");
  expect(typeof responseBody[0].died).toBe("string");
  expect(Array.isArray(responseBody[0].titles)).toBe(true);
  expect(typeof responseBody[0].titles[0]).toBe("string");
  expect(Array.isArray(responseBody[0].aliases)).toBe(true);
  expect(typeof responseBody[0].aliases[0]).toBe("string");
  expect(typeof responseBody[0].father).toBe("string");
  expect(typeof responseBody[0].mother).toBe("string");
  expect(typeof responseBody[0].spouse).toBe("string");
  expect(Array.isArray(responseBody[0].allegiances)).toBe(true);
  expect(Array.isArray(responseBody[0].books)).toBe(true);
  expect(responseBody[0].books[0]).toContain("https://www.anapioficeandfire.com/api/books/");
  expect(Array.isArray(responseBody[0].povBooks)).toBe(true);
  expect(Array.isArray(responseBody[0].tvSeries)).toBe(true);
  expect(typeof responseBody[0].tvSeries[0]).toBe("string");
  expect(Array.isArray(responseBody[0].playedBy)).toBe(true);
  expect(typeof responseBody[0].playedBy[0]).toBe("string");
})