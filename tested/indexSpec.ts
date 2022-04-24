import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("Test basic endpoint server", () => {
  it("Get the / endpoint"),
    async () => {
      const response = await request.get("/images");
      expect(response.status).toBe(200);
    };
});
