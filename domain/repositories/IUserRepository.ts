import { UserEntity } from "../entities/UserEntity";

export interface IUserRepository {
    create: (user: UserEntity) => Promise<{ id: string }>
    get: (userId: string) => Promise<UserEntity>
    edit: (userId: string, userData: UserEntity) => Promise<UserEntity>
    remove: (userId: string) => Promise<{ status: number }>
}