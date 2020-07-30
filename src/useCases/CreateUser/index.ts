import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };