import { IUserRepository } from '../../domain/repositories/IUserRepository'
import { UserEntity } from '../../domain/entities/UserEntity'


export class UserRepository implements IUserRepository {

    private users: UserEntity[] = []

    constructor() {
        const user1 = new UserEntity()

        Object.assign(user1, { cpf: '111', email: 'm@m.gmail.com', fone: '11', name: 'Marcos' })

        this.users.push(user1)

    }

    public get(userCpf: string): Promise<UserEntity | undefined> {
        const findIndex = this.users.findIndex(user => user.cpf === userCpf)

        if (findIndex === -1) {
            return undefined
        }

        return Promise.resolve(this.users.at(findIndex))
    }

    public create(user: UserEntity): Promise<UserEntity | undefined> {
        this.users.push(user)
        return Promise.resolve(user)
    }

    edit(userCpf: string, userData: UserEntity) {
        let [filteredUserByCpf] = this.users.filter(user => user.cpf === userCpf)

        if (!filteredUserByCpf) return {}

        filteredUserByCpf = { ...filteredUserByCpf, ...userData }

        return filteredUserByCpf
    }

    remove(userCpf: string) {
        const findIndex = this.users.findIndex(user => user.cpf === userCpf)

        if (findIndex === -1) {
            return false
        }

        this.users.splice(findIndex, 1)
        return true

    }
}