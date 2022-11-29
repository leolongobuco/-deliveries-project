import { describe, expect, test } from "vitest";

import { Deliveryman } from "./deliveryman";

describe("Create an Deliveryman", () => {
  test("shold be to create a deliveryman", async () => {
    const deliveryman = new Deliveryman({
      username: "deliveryman@email.com",
      password: "password123",
    });

    expect(deliveryman).toBeInstanceOf(Deliveryman);
    expect(deliveryman.username).toBe("deliveryman@email.com");
    expect(deliveryman).toHaveProperty("id");
  });
});
