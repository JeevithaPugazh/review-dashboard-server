import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/data-model";
import { Request, Response } from "express";

function generateToken(user: Object) {
  return Jwt.sign(user, process.env.JWT_SECRET!);
}

export async function loginUser(
  req: Request,
  res: Response
): Promise<void> {
  console.log("Login route hit", req.body);
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ error: "Invalid email" });
      return;
    } else {
      // If you are storing hashed passwords, use bcrypt.compare

      if (password != user.password) {
        res.status(401).json({ error: "Invalid password" });
        return;
      }

      const token = generateToken(user.toObject());
      res.status(200).json({ token, user });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
