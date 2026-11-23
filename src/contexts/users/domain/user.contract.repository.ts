import { Injectable } from '@angular/core';
import { CreateUserDTO } from './dtos/create-user.dto';
import { PublicUserDTO } from './dtos/public-user.dto';
import { TokensDTO } from './dtos/tokens.dto';

@Injectable({
  providedIn: 'root',
})
export abstract class UserRepository {
  abstract create(user: CreateUserDTO): Promise<PublicUserDTO>;
  abstract loginUser(credentials: { username: string; password: string }): Promise<TokensDTO>;
  abstract getAllUsers(): Promise<PublicUserDTO[]>;
  abstract refresh(refreshToken: string): Promise<TokensDTO>;
}
