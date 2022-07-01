import { UserEntity } from "../../../../domain/entities/UserEntity";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
// import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { database } from "../index";

class FirestoreUserRepository implements IUserRepository {
    private readonly collection = database.collection("users-test");

    public async create(user: UserEntity): Promise<UserEntity | undefined> {
        const userFound = await this.get(user.cpf)

        if (userFound) {
            throw new Error(
                `Usuário de cpf ${user.cpf} já existe no banco de dados`
            );
        }

        Object.assign(user, {
            updateAt: new Date(),
            createdAt: new Date(),
        });

        try {
            await this.collection.add(user);
        } catch (error) {
            console.error(error);
            throw new Error(`Erro ao salvo usuário de cpf ${user.cpf}`);
        }

        return user;
    }

    public async get(userCpf: string): Promise<UserEntity | undefined> {
        const usersDoc = await this.collection
            .where("cpf", "==", userCpf)
            .get();

        const [user = undefined] = usersDoc.docs.map((doc) => doc.data()) as UserEntity[];

        return user
    }

    remove: (userCpf: string) => boolean;
}

export { FirestoreUserRepository };
