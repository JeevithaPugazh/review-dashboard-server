import { Request, Response } from "express";
import mongoose from "mongoose";
import {User} from "../models/data-model";
import { AuthRequest } from "../middleware/auth-middleware";


async function getUsers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const users = await User.create(req.body);
    res.status(201).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUserById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res
        .status(400)
        .json({ error: "Invalid user ID format" });
      return;
    }

    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json({
      message: `User ${deleteUser.username} deleted successfully`,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUser(
  req: AuthRequest,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body
    );

    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export {
  getUsers,
  createUser,
  deleteUserById,
  updateUser,
};
