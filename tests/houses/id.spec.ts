import { test, expect } from '@playwright/test';

test("Validar o método GET no endpoint /houses/{id}", async({ request }) => {
  const response = await request.get("/api/houses/10");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(responseBody.url).toContain("https://www.anapioficeandfire.com/api/houses/");
  expect(typeof responseBody.name).toBe("string");
  expect(typeof responseBody.region).toBe("string");
  expect(typeof responseBody.coatOfArms).toBe("string");
  expect(typeof responseBody.words).toBe("string");
  expect(Array.isArray(responseBody.titles)).toBe(true);
  expect(typeof responseBody.titles[0]).toBe("string");
  expect(Array.isArray(responseBody.seats)).toBe(true);
  expect(typeof responseBody.seats[0]).toBe("string");
  expect(typeof responseBody.currentLord).toBe("string");
  expect(typeof responseBody.heir).toBe("string");
  expect(responseBody.overlord).toContain("https://www.anapioficeandfire.com/api/houses/");
  expect(typeof responseBody.founded).toBe("string");
  expect(typeof responseBody.founder).toBe("string");
  expect(typeof responseBody.diedOut).toBe("string");
  expect(Array.isArray(responseBody.ancestralWeapons)).toBe(true);
  expect(typeof responseBody.ancestralWeapons[0]).toBe("string");
  expect(Array.isArray(responseBody.cadetBranches)).toBe(true);
  expect(Array.isArray(responseBody.swornMembers)).toBe(true);
})