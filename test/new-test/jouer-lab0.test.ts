import "jest-extended";
import { readFileSync } from "fs";
import path from "path";

let content = "";
beforeAll(async () => {
  const filename = path.join("test", "routes", "jeuRouter-jouer.test.ts");
  content = readFileSync(filename, "utf-8");
});

describe("test/routes/jeuRouter-jouer.test.ts", () => {
  it("devrait contenir expect(response.body.resultat.v3).toBeWithin(1, 10)", () => {
    expect(
      content.includes("expect(resultat.v3).toBeWithin(1, 10)")
    ).toBeTruthy();
  });
});
