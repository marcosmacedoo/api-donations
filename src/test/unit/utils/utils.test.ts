import { isCpfValid } from "../../../presentation/utils"

describe('Validate cpf', () => {
    it('Test cpf equal 35801215883', () => {
        const cpf = '35801215883'
        const response = isCpfValid(cpf)

        expect(response).toEqual(true)
    })

    it('Test cpf equal 3oy5883', () => {
        const cpf = '3oy5883'
        const response = isCpfValid(cpf)

        expect(response).toEqual(false)
    })

    it('Test cpf equal 3580-215883', () => {
        const cpf = '3580-215883'
        const response = isCpfValid(cpf)

        expect(response).toEqual(false)
    })
})