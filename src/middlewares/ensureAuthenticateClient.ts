import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export default async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("JWT token is missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "B7558C5F4B9C820B8174B79ED6E8D808");

    request.client_id = sub as string;

    return next();
  } catch (error) {
    throw new Error("Invalid JWT token");
  }
}
