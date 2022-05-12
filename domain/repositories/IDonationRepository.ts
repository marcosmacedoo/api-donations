import { DonationEntity } from "../entities/DonationEntity";
import { UserEntity } from "../entities/UserEntity";
import { OngEntity } from "../entities/OngEntity";

export interface IDonationRepository {
    donate: (donation: DonationEntity) => Promise<{ id: string }>
    get: (donationId: string) => Promise<DonationEntity> 
    all: () => Promise<DonationEntity[]>
    allUsersByOng: (userCpf: string, ongCnpj: string) => Promise<UserEntity[]> 
    allOngsByUser: (userCpf: string, ongCnpj: string) => Promise<OngEntity[]> 
}