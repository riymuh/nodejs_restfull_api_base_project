import supertest from "supertest";
import { web } from "../src/application/web.js";
import { prismaClient } from "../src/application/database.js";
import { logger } from "../src/application/logging.js";

describe("POST /api/users", () => {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: "riymuh",
      },
    });
  });

  it("should can register new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "riymuh",
      password: "password",
      name: "riyadh muhammad",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("riymuh");
    expect(result.body.data.name).toBe("riyadh muhammad");
    expect(result.body.data.password).toBeUndefined();
  });

  it("should reject if request is invalid", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "riymuh",
      password: "password",
      //name: "riyadh muhammad",
    });

    expect(result.status).toBe(400);
    expect(result.body.errros).toBeDefined;
  });

  it("should reject if username already used", async () => {
    let result = await supertest(web).post("/api/users").send({
      username: "riymuh",
      password: "password",
      name: "riyadh muhammad",
    });

    result = await supertest(web).post("/api/users").send({
      username: "riymuh",
      password: "password",
      name: "riyadh muhammad",
    });

    expect(result.status).toBe(400);
    expect(result.body.errros).toBeDefined;
  });
});
