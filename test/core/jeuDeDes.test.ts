import "jest-extended";
import { JeuDeDes } from "../../src/core/jeuDeDes";

describe("JeuDeDesTest", () => {
  let jdd: JeuDeDes;
  beforeEach(async () => {
    jdd = new JeuDeDes();
  });

  it(`devrait n'avoir aucun joueur au début`, async () => {
    expect(jdd.joueurs).toEqual("[]");
  });

  it("devrait retourner une valeur entre 2 et 19", () => {
    for (let i = 0; i < 200; i++) {
      expect(jdd.brasser()).toBeWithin(2, 19);
    }
  });

  it("devrait retourner finalement toutes les valeurs entre 2 et 19", () => {
    const resultats = new Set();
    for (let i = 0; i < 2000; i++) {
      resultats.add(jdd.brasser());
    }
    // nombre UNIQUE, résultats possibles sont : [3, 4, ..., 17, 18], donc 18-3+1=16
    expect(resultats.size).toBe(16);
    for (let i = 2; i < 17; i++) {
      expect(resultats.has(i + 1)).toBeTrue();
    }
    // cas particuliers
    expect(resultats.has(1)).toBeFalsy();
    expect(resultats.has(2)).toBeFalsy();
    expect(resultats.has(19)).toBeFalsy();
  });
});
