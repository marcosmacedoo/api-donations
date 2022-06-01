import { IUserRepository } from "../../../infra/repositories/IUserRepository";
import { UserEntity } from "../../entities/UserEntity";

export class CreateUser {
    private userRepository: IUserRepository
    
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    public async execute(user: UserEntity) {
        await this.userRepository.create(user)
    }
}
