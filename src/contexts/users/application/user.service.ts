import { inject, Injectable } from '@angular/core';
import { CreateUser } from '../domain/entities/create-user.entity';
import { Credentials } from '../domain/entities/credentials.entity';
import { User } from '../domain/entities/user.entity';
import { CreateUserMapper } from '../domain/mappers/create-user.mapper';
import { CredentialsMapper } from '../domain/mappers/credentials.mapper';
import { PublicUserMapper } from '../domain/mappers/public-user.mapper';
import { TokensMapper } from '../domain/mappers/tokens.mapper';
import { UserRepository } from '../domain/user.contract.repository';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userRepository = inject(UserRepository);
  private readonly publicUserMapper = new PublicUserMapper();
  private readonly createUserMapper = new CreateUserMapper();

  createUser(user: CreateUser): Promise<User> {
    const createUserDTO = this.createUserMapper.toDTO(user);
    return this.userRepository
      .create(createUserDTO)
      .then((publicUserDTO) => this.publicUserMapper.toEntity(publicUserDTO));
  }

  loginUser(credentials: Credentials): Promise<User> {
    const credentialsDTO = new CredentialsMapper().toDTO(credentials);
    return this.userRepository.loginUser(credentialsDTO).then((tokensDTO) => {
      const tokens = new TokensMapper().toEntity(tokensDTO);

      // SAVE TOKENS IN AuthService (pending)

      return {} as User; // Return a User entity (pending)
    });
  }
}
