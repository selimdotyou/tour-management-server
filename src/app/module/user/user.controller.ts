/* eslint-disable no-console */
import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UserService } from "./user.service.js";

const  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try { 
        const user = await UserService.createUser(req.body);
        res.status(StatusCodes.CREATED).json({ message: "User created successfully", user });

    } catch (error) {
        console.error("Error creating user:", error);
        next(error);
    }
}

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(StatusCodes.OK).json({ message: "Users retrieved successfully", users });
    } catch (error) {
        console.error("Error retrieving users:", error);
        next(error);
    }
}

const userController = {
    createUser,
    getAllUsers
}

export default userController;