import { UserEntity } from '../../../entities/UserEntity'
import { IUserRepository } from "../../../repositories/IUserRepository";

interface IRequestModel {
    cpf: string,
    name: string
    fone: string
    email: string
}

interface IResponseModel {
    cpf: string,
    name: string
    fone: string
    email: string
    createdAt?: Date
    updatedAt?: Date
}

export class CreateUser {

    constructor(private userRepository: IUserRepository) {

    }

    public async execute(userParam: IRequestModel): Promise<IResponseModel> {
        const response = await this.userRepository.create(userParam)
        
        return response
    }
}