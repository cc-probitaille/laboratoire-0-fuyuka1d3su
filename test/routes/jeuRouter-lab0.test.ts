import "jest-extended";
import { readFileSync } from "fs";
import path from "path";

let content = "";
beforeAll(async () => {
  const filename = path.join("src", "routes", "jeuRouter.ts");
  content = readFileSync(filename, "utf-8");
});

describe("src/routes/jeuRouter.ts", () => {
  it("devrait contenir this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this))", () => {
    expect(
      content.includes(
        'this._router.get("/redemarrerJeu", this.redemarrerJeu.bind(this))'
      )
    ).toBeTruthy();
  });

  it("devrait contenir redemarrerJeu(req: Request, res: Response, next: NextFunction) {", () => {
    expect(
      content.includes(
        "redemarrerJeu(req: Request, res: Response, next: NextFunction) {"
      )
    ).toBeTruthy();
  });

  it("devrait contenir this._controleurJeu.redemarrerJeu()", () => {
    expect(
      content.includes("this._controleurJeu.redemarrerJeu()")
    ).toBeTruthy();
  });

  it("devrait contenir resultat.v3", () => {
    expect(content.includes("resultatObj.v3")).toBeTruthy();
  });
});
