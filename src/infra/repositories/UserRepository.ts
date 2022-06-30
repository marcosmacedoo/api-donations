import { IUserRepository } from '../../domain/repositories/IUserRepository'
import { UserEntity } from '../../domain/entities/UserEntity'
import { isCpfValid, isEmailValid, isPhoneValid } from '../../presentation/utils'
import { FirestoreUserRepository } from '../persistence/firestore/repositories/FirestoreUserRepository'

export class UserRepository implements IUserRepository {

    private users: UserEntity[] = []
    private firestore: FirestoreUserRepository

    constructor() {
        this.firestore = new FirestoreUserRepository()
        const user1 = new UserEntity()

        Object.assign(user1, { cpf: '111', email: 'm@m.gmail.com', fone: '11', name: 'Marcos' })

        this.users.push(user1)

    }

    private isValidUserData(user: UserEntity): boolean {
        if (
            isCpfValid(user.cpf) &&
            isPhoneValid(user.phone) &&
            isEmailValid(user.email)
        ) {
            return true;
        }

        return false;
    }

    public get(userCpf: string): Promise<UserEntity | undefined> {
        const findIndex = this.users.findIndex(user => user.cpf === userCpf)

        if (findIndex === -1) {
            return Promise.resolve(undefined)
        }

        return Promise.resolve(this.users.at(findIndex))
    }

    public async create(user: UserEntity): Promise<UserEntity | undefined> {
        if (!this.isValidUserData(user)) {
            return undefined
        }

        try {
            const savedUser = await this.firestore.save(user)
            return savedUser
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public edit(userCpf: string, userData: UserEntity): {} {
        let [filteredUserByCpf] = this.users.filter(user => user.cpf === userCpf)

        if (!filteredUserByCpf) return {}

        filteredUserByCpf = { ...filteredUserByCpf, ...userData }

        return filteredUserByCpf
    }

    public remove(userCpf: string) {
        const findIndex = this.users.findIndex(user => user.cpf === userCpf)

        if (findIndex === -1) {
            return false
        }

        this.users.splice(findIndex, 1)
        return true

    }
}
