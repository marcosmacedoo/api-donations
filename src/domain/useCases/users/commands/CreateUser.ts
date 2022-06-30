import { UserEntity } from "../../../entities/UserEntity";
import { IUserRepository } from "../../../repositories/IUserRepository";

interface IRequestModel {
    cpf: string;
    name: string;
    phone: string;
    email: string;
}

interface IResponseModel {
    cpf: string;
    name: string;
    phone: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class CreateUser {
    constructor(private userRepository: IUserRepository) {}

    public async execute(
        userParam: IRequestModel
    ): Promise<IResponseModel | undefined> {
        const response = await this.userRepository.create(userParam);

        return response;
    }
}
