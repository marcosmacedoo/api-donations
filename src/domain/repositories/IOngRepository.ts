import { OngEntity } from "../entities/OngEntity";

export interface IOngRepository {
    create: (ong: OngEntity) => { statusCode: number }
    get: (ongId: string) => OngEntity | {}
    edit: (ongId: string, ongData: OngEntity) => Promise<OngEntity>
    remove: (ongCnpj: string) => { statusCode: number }
}