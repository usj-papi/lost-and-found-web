import { inject, Injectable } from '@angular/core';
import { CreateUser } from '../domain/entities/create-user.entity';
import { Credentials } from '../domain/entities/credentials.entity';
import { Tokens } from '../domain/entities/tokens.entity';
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

  loginUser(credentials: Credentials): Promise<Tokens> {
    const credentialsDTO = new CredentialsMapper().toDTO(credentials);
    return this.userRepository.loginUser(credentialsDTO).then((tokensDTO) => {
      return new TokensMapper().toEntity(tokensDTO);
    });
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers().then((publicUserDTOs) => {
      return publicUserDTOs.map((publicUserDTO) => this.publicUserMapper.toEntity(publicUserDTO));
    });
  }

  refresh(refreshToken: string): Promise<Tokens> {
    return this.userRepository.refresh(refreshToken).then((tokensDTO) => {
      return new TokensMapper().toEntity(tokensDTO);
    });
  }
}
