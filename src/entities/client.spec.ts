import { expect, test, describe } from "vitest";

import { Client } from "./client";

describe("Create an Client", () => {
  test("should be to create a client", async () => {
    const client = new Client({
      username: "client@example.com",
      password: "password123",
    });

    expect(client).toBeInstanceOf(Client);
    expect(client.username).toEqual("client@example.com");
    expect(client).toHaveProperty("id");
  });
});
