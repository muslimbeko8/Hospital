export declare enum UserRole {
    USER = "user",
    ADMIN = "admin",
    BOSS = "boss",
    DOCTOR = "doctor",
    SUPERADMIN = "superAdmin"
}
export declare class CreateUserDto {
    first_name: string;
    last_name: string;
    tel_number: string;
    password: string;
    birth: Date;
    role: UserRole;
    profile_photo?: string;
    hospital_id?: number;
}
