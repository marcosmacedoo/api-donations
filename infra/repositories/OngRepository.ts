import { IOngRepository } from '../../domain/repositories/IOngRepository'
import { OngEntity } from '../../domain/entities/OngEntity'

const ongs = [
    { cnpj: '1', name: 'Ong x', pix: '1'},
    { cnpj: '2', name: 'Ong y', pix: '2'}
]

export class OngRepository implements IOngRepository {
    create(ong: OngEntity) { 
        return { statusCode: 200 }
    } 

    get(ongCpnj: string) { 
        const [filteredOngByCnpj = {}] = ongs.filter(user => user.cnpj === ongCpnj)

        return filteredOngByCnpj
    }

    edit: (ongId: string, ongData: OngEntity) => Promise<OngEntity>;
    
    remove(ongCnpj: string) {
        return { statusCode: 200 }
    }
}