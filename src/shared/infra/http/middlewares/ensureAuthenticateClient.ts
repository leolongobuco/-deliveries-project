import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "1f8f4c33ffbade9e82444ed27520dc2c"
    ) as IPayload;

    request.idClient = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }
}

export { ensureAuthenticateClient };
