import { UserRepository } from "../../../infra/repositories/UserRepository";
import { UserEntity } from "../../entities/UserEntity";

export class EditUser {
    private userRepository: UserRepository
    private userData: UserEntity
    private userId: string
    
    constructor(userRepository: UserRepository, userData: UserEntity, userId: string) {
        this.userRepository = userRepository
        this.userData = userData,
        this.userId = this.userId
    }

    public async execute() {
        await this.userRepository.edit(this.userId, this.userData)
    }
}
