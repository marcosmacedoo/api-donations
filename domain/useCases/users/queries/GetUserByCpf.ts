import { UserEntity } from "../../../entities/UserEntity";
import { IUserRepository } from "../../../repositories/IUserRepository";

interface IRequestModel{
    cpf: string
}

interface IResponseModel{
    user: UserEntity
}

export class GetUserByCPF {
    
    constructor(private userRepository: IUserRepository) {
    }

    public async execute({cpf}: IRequestModel): Promise<IResponseModel> {

        const user = await this.userRepository.get(cpf)

        if (!user){
            throw Error(`Usuário não localizado para o CPF ${cpf}`)
        }

        return { user }
    }
}
