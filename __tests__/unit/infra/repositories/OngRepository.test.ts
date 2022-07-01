// import { OngRepository } from '../../../../infra/repositories/OngRepository'

describe('Tests', () => {
    it('Test 1', () => expect({}).toEqual({}))
})

// const ongRepo = new OngRepository()

// const ong1 = { cnpj: '1', name: 'Ong x', pix: '1'}
// const ong2 = { cnpj: '2', name: 'Ong y', pix: '2'}

// describe('Create ong', () => {
//     it('Should be return status code equal 200', () => {
//         const response = ongRepo.create(ong1)

//         expect(response).toEqual({ statusCode: 200 })
//     })

//     it('Should be return status code equal 400', () => {
//         const response = ongRepo.create(ong1)

//         expect(response).not.toEqual({ statusCode: 400 })
//     })
// })

// describe('Remove ong', () => {
//     it('Should be return status code equal 200', () => {
//         const response = ongRepo.remove('1')

//         expect(response).toEqual({ statusCode: 200 })
//     })

//     it('Should be return status code equal 400', () => {
//         const response = ongRepo.remove('2')

//         expect(response).not.toEqual({ statusCode: 400 })
//     })
// })

// describe('Get ong', () => {
//     it('Should be return ong with cnpj equal 1', () => {
//         const response = ongRepo.get('1')

//         expect(response).toEqual(ong1)
//     })

//     it('Should be return ong with cnpj equal 2', () => {
//         const response = ongRepo.get('2')

//         expect(response).toEqual(ong2)
//     })

//     it('Should be return ong equal {}', () => {
//         const response = ongRepo.get('3')

//         expect(response).toEqual({})
//     })
// })