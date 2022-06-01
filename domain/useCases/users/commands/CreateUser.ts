import { UserEntity } from '../../../entities/UserEntity'
import { IUserRepository } from "../../../repositories/IUserRepository";

interface IRequestModel {
    cpf: string,
    name: string
    fone: string
    email: string
}

interface IResponseModel {
    user: UserEntity
}

export class CreateUser {
    
    constructor (private userRepository: IUserRepository) {

    }

    public async execute(user: IRequestModel): Promise<IResponseModel> {
        const responseUser = await this.userRepository.create(user)
        
    }
}