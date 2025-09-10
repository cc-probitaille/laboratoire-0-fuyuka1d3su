// Vous devez insérer les nouveaux tests ici
import "jest-extended";
import supertest from "supertest";
import app from "../../src/app";
import { jeuRoutes } from "../../src/routes/jeuRouter";

const request = supertest(app);

beforeAll(async () => {
  await request.post("/api/v1/jeu/demarrerJeu").send({
    nom: "Mirai",
  });
  await request.post("/api/v1/jeu/demarrerJeu").send({
    nom: "Kuriyama",
  });
});

describe("GET /api/v1/jeu/redemarrerJeu", () => {
  it("devrait redémarrer le jeu", async () => {
    let res = await request.get("/api/v1/jeu/redemarrerJeu");
    expect(res.status).toBe(200);
  });

  it("devrait rendre 0 pour le nombre de Joueurs", async () => {
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(0);
  });

  it("devrait donner 404 après avoir redémarré le jeu", async () => {
    let res = await request.get("/api/v1/jeu/jouer/");
    expect(res.status).toBe(404);
  });
});
