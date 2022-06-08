import { UserEntity } from "../../domain/entities/UserEntity";

function isOnlyNumbersOfString(stringParam: string) {
    const onlyNumbers = stringParam.replace(/[^0-9]/g, "");

    return onlyNumbers.length === 11;
}


function isCpfValid(cpf: string): boolean {
    return cpf.length === 11 && isOnlyNumbersOfString(cpf)
}

function isValidUserData(user: UserEntity): boolean {
    return true
}

export { isCpfValid, isOnlyNumbersOfString, isValidUserData }