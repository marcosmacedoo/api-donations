import { UserRepository } from '../../../../infra/repositories/UserRepository'

const userRepo = new UserRepository()

const user1 =
    { cpf: '111', email: 'm@m.gmail.com', fone: '11', name: 'Marcos' }

const user2 = { cpf: '222', email: 'h@h.gmail.com', fone: '22', name: 'Hilton' }

describe('Create user', () => {
    it('Should be return status code equal 200', () => {
        const response = userRepo.create(user1)

        expect(response).toEqual({ statusCode: 200 })
    })

    it('Should be return status code equal 400', () => {
        const response = userRepo.create(user1)

        expect(response).not.toEqual({ statusCode: 400 })
    })
})

describe('Get User by cpf', () => {
    it('Should be return user with cpf equal 111', () => {
        const user = userRepo.get('111')

        expect(user).toEqual(user1)
    })

    it('Should be return user with cpf equal 222', () => {
        const user = userRepo.get('222')

        expect(user).toEqual(user2)
    })

    it('Should be return user equal {}', () => {
        const user = userRepo.get('333')

        expect(user).toEqual({})
    })
})

describe('Remove User by cpf', () => {
    it('Should be remove user by cpf equal 111 and return status code equal 200', () => {
        const response = userRepo.remove('111')

        expect(response).toEqual({ statusCode: 200 })
    })

    it('Should be remove user by cpf equal 222 and return status code equal 200', () => {
        const response = userRepo.remove('222')

        expect(response).toEqual({ statusCode: 200 })
    })

    it('Should be remove user by cpf equal 333 and return status code equal 400', () => {
        const response = userRepo.remove('333')

        expect(response).not.toEqual({ statusCode: 400 })
    })
})

describe('Edit user by cpf', () => {
    it('Should be edit user by cpf 111', () => {
        const response = userRepo.edit('111', { name: 'Luis' })

        expect(response).toEqual({ cpf: '111', email: 'm@m.gmail.com', fone: '11', name: 'Luis' })
    })

    it('Should be edit user by cpf 222', () => {
        const response = userRepo.edit('222', { name: 'Tiago', fone: '123' })

        expect(response).toEqual({ cpf: '222', email: 'h@h.gmail.com', fone: '123', name: 'Tiago' })
    })

    it('Should be edit user by cpf 333', () => {
        const response = userRepo.edit('333', { fone: '123' })

        expect(response).toEqual({ })
    })
})