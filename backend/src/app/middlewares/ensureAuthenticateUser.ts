import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string
}

export const ensureAuthenticateUser = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).json({
      message: "Missing JWT token",
    });
  }

  const [_, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, process.env.SECRET_KEY as string) as Payload;
    
    request.user_id = sub;
    
    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid JWT token",
    });
  }
}
