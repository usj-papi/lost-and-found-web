import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environment';
import { CreateUserDTO } from '../domain/dtos/create-user.dto';
import { CredentialsDTO } from '../domain/dtos/credentials.dto';
import { PublicUserDTO } from '../domain/dtos/public-user.dto';
import { TokensDTO } from '../domain/dtos/tokens.dto';
import { UserRepository } from '../domain/user.contract.repository';

@Injectable({
  providedIn: 'root',
})
export class UserHttpRepository extends UserRepository {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  override create(user: CreateUserDTO): Promise<PublicUserDTO> {
    return firstValueFrom(this.httpClient.post<PublicUserDTO>(`${this.apiUrl}/auth/signup`, user));
  }

  override loginUser(credentials: CredentialsDTO): Promise<TokensDTO> {
    return firstValueFrom(
      this.httpClient.post<TokensDTO>(`${this.apiUrl}/auth/login`, credentials),
    );
  }

  override getAllUsers(): Promise<PublicUserDTO[]> {
    return firstValueFrom(this.httpClient.get<PublicUserDTO[]>(`${this.apiUrl}/users`));
  }

  override refresh(refreshToken: string): Promise<TokensDTO> {
    return firstValueFrom(
      this.httpClient.post<TokensDTO>(`${this.apiUrl}/auth/refresh`, { refreshToken }),
    );
  }
}
