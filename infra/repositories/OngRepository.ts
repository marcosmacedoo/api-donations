import { IOngRepository } from '../../domain/repositories/IOngRepository'
import { OngEntity } from '../../domain/entities/OngEntity'

export class OngRepository implements IOngRepository {
    create: (ong: OngEntity) => Promise<{ id: string; }>; 
    get: (ongId: string) => Promise<OngEntity>;
    edit: (ongId: string, ongData: OngEntity) => Promise<OngEntity>;
    remove: (ongId: string) => Promise<{ status: number; }>;
}