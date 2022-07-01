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
        const user = await this.userRepository.create(userParam);

        if (!user) {
            throw new Error('Usuário já existe')
        }

        return user;
    }
}
