import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";//used to verify token

export interface AuthRequest extends Request {
  userId?: String;
}

//middleware function
export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  //token extraction
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token){
    res.status(401).json({ error: "Token required" });
    return
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user: any) => {
    if (err){

     res.status(403).json({ error: "Invalid token" });
     return
    }
    req.userId = user._id; // add userId to request
    next();
  });
};