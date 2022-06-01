import { UserEntity } from "../entities/UserEntity";

export interface IUserRepository {
    create: (user: UserEntity) => Promise<UserEntity | undefined>
    get: (userCpf: string) => Promise<UserEntity | undefined>
    edit: (userCpf: string, userData: UserEntity) => UserEntity
    remove: (userCpf: string) => boolean
}