import {
    isCpfValid,
    isEmailValid,
    isPhoneValid,
} from "../../../../presentation/utils";

describe("Validate cpf", () => {
    it("Test cpf equal 35801215883", () => {
        const cpf = "35801215883";
        const response = isCpfValid(cpf);

        expect(response).toEqual(true);
    });

    it("Test cpf equal 3oy5883", () => {
        const cpf = "3oy5883";
        const response = isCpfValid(cpf);

        expect(response).toEqual(false);
    });

    it("Test cpf equal 3580-215883", () => {
        const cpf = "3580-215883";
        const response = isCpfValid(cpf);

        expect(response).toEqual(false);
    });

    it('Test cpf equal ""', () => {
        const cpf = "";
        const response = isCpfValid(cpf);

        expect(response).toEqual(false);
    });
});

describe("Validate phone", () => {
    it("Test phone equal 86995028103", () => {
        const phone = "86995028103";
        const response = isPhoneValid(phone);

        expect(response).toEqual(true);
    });

    it("Test phone equal 8699502810u", () => {
        const phone = "8699502810u";
        const response = isPhoneValid(phone);

        expect(response).toEqual(false);
    });

    it("Test phone equal 8699501", () => {
        const phone = "8699501";
        const response = isPhoneValid(phone);

        expect(response).toEqual(false);
    });

    it("Test phone equal 8699501399381", () => {
        const phone = "8699501399381";
        const response = isPhoneValid(phone);

        expect(response).toEqual(false);
    });
});

describe("Validate email", () => {
    it("Test email equal marcos@gmail.com", () => {
        const email = "marcos@gmail.com";
        const response = isEmailValid(email);

        expect(response).toEqual(true);
    });

    it("Test email equal mewdfjiwe$2", () => {
        const email = "mewdfjiwe$2";
        const response = isEmailValid(email);

        expect(response).toEqual(false);
    });

    it("Test email equal fido.dev.cirf.br", () => {
        const email = "fido.dev.cirf.br";
        const response = isEmailValid(email);

        expect(response).toEqual(false);
    });
});
