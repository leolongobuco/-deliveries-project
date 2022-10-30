import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

async function ensureAuthenticateDeliveryman(
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
      "6641f536e92b926dc45e213d2d6f642b"
    ) as IPayload;

    request.idDeliveryman = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }
}

export { ensureAuthenticateDeliveryman };
