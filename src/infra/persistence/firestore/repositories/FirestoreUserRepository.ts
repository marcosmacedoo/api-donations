import { UserEntity } from "../../../../domain/entities/UserEntity";
// import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { database } from '../index'

class FirestoreUserRepository {
    private readonly collection = database.collection('users-test')

    public async save(user: UserEntity): Promise<UserEntity | undefined> {
        const newUser = {
            ...user,
            updateAt: new Date(),
            createdAt: new Date()
        }

        try {
            await this.collection.add(newUser)
        } catch (error){
            console.error(error)
            throw new Error(`Erro ao salvo usuário de cpf ${newUser.cpf}`)
        }

        return newUser
    }
}

export { FirestoreUserRepository }
