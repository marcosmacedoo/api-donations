import { Request, Response } from "express";
import { UserEntity } from "../../domain/entities/UserEntity";
import { CreateUser } from "../../domain/useCases/users/commands/CreateUser";
import { GetUserByCPF } from "../../domain/useCases/users/queries/GetUserByCpf";
import { UserRepository } from "../../infra/repositories/UserRepository";

class UserController {
    public async save(request: Request, response: Response): Promise<Response> {
        const user = request.body as UserEntity;
        const userRepository = new UserRepository();
        const command = new CreateUser(userRepository);

        try {
            const savedUser = await command.execute(user);
            return response.status(201).json(savedUser);
        } catch (error) {
            return response
                .status(400)
                .json({ message: "Erro ao salvar usuário" });
        }
    }

    public async get(request: Request, response: Response) {
        const { cpf } = request.params as { cpf: string };
        const userRepository = new UserRepository();
        const query = new GetUserByCPF(userRepository);

        try {
            const user = await query.execute({ cpf });
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({ msg: "Erro ao buscar usuário" });
        }
    }
}

export { UserController };
