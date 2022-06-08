import { UserEntity } from "../../../../domain/entities/UserEntity"
import { CreateUser } from "../../../../domain/useCases/users/commands/CreateUser"
import { UserRepository } from '../../../../infra/repositories/UserRepository'

const userRepository = new UserRepository()
const createUser = new CreateUser(userRepository)

describe('createUser', () => {
    it('Criando user 1', async () => {
        const user: UserEntity = {
            cpf: '333333',
            name: 'Marcos',
            fone: '11111',
            email: 'marcos@email.com'
        }

        const response = await createUser.execute(user)

        expect(response).toEqual(user)
    })
})

