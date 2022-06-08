import { IDonationRepository } from '../../domain/repositories/IDonationRepository'
import { DonationEntity } from '../../domain/entities/DonationEntity';
import { UserEntity } from '../../domain/entities/UserEntity';
import { OngEntity } from '../../domain/entities/OngEntity';

export class DonationRepository implements IDonationRepository {
    donate: (donation: DonationEntity) => Promise<{ id: string; }>; 
    get: (donationId: string) => Promise<DonationEntity>;
    all: () => Promise<DonationEntity[]>;
    allUsersByOng: (userCpf: string, ongCnpj: string) => Promise<UserEntity[]>;
    allOngsByUser: (userCpf: string, ongCnpj: string) => Promise<OngEntity[]>
}