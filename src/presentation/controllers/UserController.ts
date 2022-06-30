import { Request, Response } from "express";
import { UserEntity } from "../../domain/entities/UserEntity";
import { CreateUser } from "../../domain/useCases/users/commands/CreateUser";
import { UserRepository } from "../../infra/repositories/UserRepository";

class UserController {
    public async save(request: Request, response: Response): Promise<Response> {
        const user = request.body as UserEntity;
        const userRepository = new UserRepository();
        const createUser = new CreateUser(userRepository);

        try {
            const savedUser = await createUser.execute(user);
            return response.status(201).json(savedUser);
        } catch {
            return response.status(400).json(undefined);
        }
    }
}

export { UserController };
