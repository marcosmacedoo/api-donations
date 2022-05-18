import { UserRepository } from "../../../infra/repositories/UserRepository";
import { UserEntity } from "../../entities/UserEntity";

export class CreateUser {
    private userRepository: UserRepository
    
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    public async execute(user: UserEntity) {
        await this.userRepository.create(user)
    }
}
