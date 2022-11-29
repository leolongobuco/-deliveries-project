import { describe, expect, test } from "vitest";
import { Client } from "./client";

import { Delivery } from "./delivery";

describe("Create an Delivery", () => {
  test("should be to create a delivery", async () => {
    const client = new Client({
      username: "client@example.com",
      password: "password123",
    });

    const delivery = new Delivery({
      itemName: "PS5",
      client,
    });

    expect(delivery).toBeInstanceOf(Delivery);
    expect(delivery.itemName).toEqual("PS5");
    expect(delivery).toHaveProperty("id");
    expect(delivery).toHaveProperty("client");
    expect(delivery.client.username).toEqual("client@example.com");
  });
});
