import express from "express";
import * as usersController from "../controllers/users-controller";
import seedDatas from "../controllers/init-controller";
import { loginUser } from "../controllers/auth-controller";
const userRouter = express.Router();

//All users routes (INDUCES) and their corresponding controller functions (CRUD)

/// seed ////
userRouter.get("/seed", seedDatas);

//Index
userRouter.get("/user/", usersController.getUsers);

userRouter.delete("/user/:id", usersController.deleteUserById);
//Create
userRouter.post("/user/", usersController.createUser);

//Update
userRouter.put("/user/", usersController.updateUser);

//Login
userRouter.post("/login", loginUser);




export default userRouter;