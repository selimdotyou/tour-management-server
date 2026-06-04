import type { IUser } from "./user.interface.js";
import TourUser from "./user.model.js";

const createUser = async (payLoad: Partial<IUser>) => {

    const user = await TourUser.create(payLoad);
    return user;
};

const getAllUsers = async () => {
    const users = await TourUser.find();
    return users;
}

export const UserService = {
    createUser,
    getAllUsers
};