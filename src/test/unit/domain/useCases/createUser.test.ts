import { CreateUser } from "../../../../domain/useCases/user/createUser"
import { UserRepository } from '../../../../infra/repositories/UserRepository'

const userRepository = new UserRepository()
const createUser = new CreateUser(userRepository)

describe('createUser', () => {
    it('Test 1', () => expect({}).toEqual({}))
})

