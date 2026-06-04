
export enum UserRole {
    superAdmin = 'superAdmin',
    Admin = 'admin',
    User = 'user',
    Guest = 'guest'
}

export enum IsActive {
    Active = 'active',
    Inactive = 'inactive',
    Blocked = 'blocked'
}

// array of string auth providers by google and credentials
export interface IauthProvider {
    provider: string;
    providerId: string;
}

export interface IUser {
    name: string;
    email: string;
    password ?: string;
    role ?: UserRole;
    phone ?: string;
    picture ?: string;
    address ?: string;
    isDeleted ?: boolean;
    isActive ?: IsActive;
    isVerified ?: boolean;
    auth ?: IauthProvider[];
    bookings ?: string[]; // array of booking ids
    guests ?: string[]; // array of guest ids
}