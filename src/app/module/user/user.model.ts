import { model, Schema } from "mongoose";
import { IsActive, UserRole, type IUser } from "./user.interface.js";

const authProviderSchema = new Schema({
    provider: { type: String, required: true },
    providerId: { type: String, required: true }
}, { _id: false });

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, enum: Object.values(UserRole), default: UserRole.User },
    phone: { type: String },
    picture: { type: String },
    address: { type: String },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: String, enum: Object.values(IsActive), default: IsActive.Active },
    isVerified: { type: Boolean, default: false },
    auth: { type: authProviderSchema }
},
{
    timestamps: true,
    versionKey: false
})

const TourUser = model<IUser>('TourUser', userSchema);

export default TourUser;