import { test, expect } from "@playwright/test";

test("Validar o método GET no endpoint /houses", async ({ request }) => {
  const response = await request.get("/api/houses");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(responseBody[0].url).toContain(
    "https://www.anapioficeandfire.com/api/houses/",
  );
  expect(typeof responseBody[0].name).toBe("string");
  expect(typeof responseBody[0].region).toBe("string");
  expect(typeof responseBody[0].coatOfArms).toBe("string");
  expect(typeof responseBody[0].words).toBe("string");
  expect(Array.isArray(responseBody[0].titles)).toBe(true);
  expect(typeof responseBody[0].titles[0]).toBe("string");
  expect(Array.isArray(responseBody[0].seats)).toBe(true);
  expect(typeof responseBody[0].seats[0]).toBe("string");
  expect(typeof responseBody[0].currentLord).toBe("string");
  expect(typeof responseBody[0].heir).toBe("string");
  expect(responseBody[0].overlord).toContain(
    "https://www.anapioficeandfire.com/api/houses/",
  );
  expect(typeof responseBody[0].founded).toBe("string");
  expect(typeof responseBody[0].founder).toBe("string");
  expect(typeof responseBody[0].diedOut).toBe("string");
  expect(Array.isArray(responseBody[0].ancestralWeapons)).toBe(true);
  expect(typeof responseBody[0].ancestralWeapons[0]).toBe("string");
  expect(Array.isArray(responseBody[0].cadetBranches)).toBe(true);
  expect(Array.isArray(responseBody[0].swornMembers)).toBe(true);
});
