import { UserRepository } from "../../../infra/repositories/UserRepository";
import { UserEntity } from "../../entities/UserEntity";

export class GetUser {
    private userRepository: UserRepository
    private userId: string
    
    constructor(userRepository: UserRepository, userId: string) {
        this.userRepository = userRepository
        this.userId = userId
    }

    public async execute() {
        await this.userRepository.get(this.userId)
    }
}
