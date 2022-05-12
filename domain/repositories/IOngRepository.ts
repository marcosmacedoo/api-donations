import { OngEntity } from "../entities/OngEntity";

export interface IOngRepository {
    create: (ong: OngEntity) => Promise<{ id: string }>
    get: (ongId: string) => Promise<OngEntity>
    edit: (ongId: string, ongData: OngEntity) => Promise<OngEntity>
    remove: (ongId: string) => Promise<{ status: number }>
}