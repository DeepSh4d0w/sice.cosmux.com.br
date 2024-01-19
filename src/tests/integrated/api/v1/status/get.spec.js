describe("GET /api/v1/status", () => {
  const [ENDPOINT_STATUS] = ["http://localhost:3000/api/v1/status"];

  it("should be received status code 200", async () => {
    const response = await fetch(ENDPOINT_STATUS);

    expect(response.status).toEqual(200);
  });

  it("should be received `updated_at` as ISO 8601", async () => {
    const response = await fetch(ENDPOINT_STATUS);

    const { updated_at } = await response.json();
    const parsedUpdatedAt = new Date(updated_at).toISOString();

    expect(updated_at).toEqual(parsedUpdatedAt);
  });

  describe("Dependencies", () => {
    describe("Database", () => {
      it("should be received `max_connections` like 100", async () => {
        const response = await fetch(ENDPOINT_STATUS);

        const responseBody = await response.json();

        expect(responseBody.dependencies.database.max_connections).toEqual(100);
      });

      it("should be received `opened_connections` like 1", async () => {
        const response = await fetch(ENDPOINT_STATUS);

        const responseBody = await response.json();

        expect(responseBody.dependencies.database.opened_connections).toEqual(
          1,
        );
      });

      it("should be received `version` like 16.0", async () => {
        const response = await fetch(ENDPOINT_STATUS);

        const responseBody = await response.json();

        expect(responseBody.dependencies.database.version).toEqual("16.0");
      });
    });
  });
});
