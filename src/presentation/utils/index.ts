import { UserEntity } from "../../domain/entities/UserEntity";

const LENGTH_CPF = 11;
const LENGTH_PHONE = 11;

function stringHasOnlyNumbers(stringParam: string): boolean {
    return /^-?\d+$/.test(stringParam);
}

function isCpfValid(cpf: string): boolean {
    return cpf.length === LENGTH_CPF && stringHasOnlyNumbers(cpf);
}

function isPhoneValid(phone: string): boolean {
    return phone.length === LENGTH_PHONE && stringHasOnlyNumbers(phone);
}

function isEmailValid(email: string): boolean {
    return email.includes("@") && email.includes(".");
}

function isValidUserData(user: UserEntity): boolean {
    if (
        isCpfValid(user.cpf) &&
        isPhoneValid(user.phone) &&
        isEmailValid(user.email)
    ) {
        return true;
    }

    return false;
}

export {
    isCpfValid,
    stringHasOnlyNumbers,
    isValidUserData,
    isPhoneValid,
    isEmailValid,
};
