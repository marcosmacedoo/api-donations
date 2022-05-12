import { IUserRepository } from '../../domain/repositories/IUserRepository'
import { UserEntity } from '../../domain/entities/UserEntity'

export class UserRepository implements IUserRepository {
    create: (user: UserEntity) => Promise<{ id: string; }>; 
    get: (userId: string) => Promise<UserEntity>;
    edit: (userId: string, userData: UserEntity) => Promise<UserEntity>;
    remove: (userId: string) => Promise<{ status: number; }>;
}