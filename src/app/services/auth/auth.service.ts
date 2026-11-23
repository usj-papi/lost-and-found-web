import { inject, Service } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UserService } from '../../../contexts/users/application/user.service';
import { User, UserRole } from '../../../contexts/users/domain/entities/user.entity';
import { LocalStorageKeys, LocalStorageService } from '../local-storage/local-storage.service';

@Service()
export class AuthService {
  private readonly localStorageService = inject(LocalStorageService);
  private readonly userService = inject(UserService);

  private user: User | undefined;
  private token: string | undefined;
  private refreshToken: string | undefined;

  constructor() {
    this.token = this.localStorageService.getItem(LocalStorageKeys.TOKEN) ?? undefined;
    this.refreshToken =
      this.localStorageService.getItem(LocalStorageKeys.REFRESH_TOKEN) ?? undefined;

    this.decodeUserFromToken();
  }

  public setTokens(token: string, refreshToken: string): void {
    this.token = token;
    this.refreshToken = refreshToken;

    this.decodeUserFromToken();

    this.localStorageService.setItem(LocalStorageKeys.TOKEN, this.token);
    this.localStorageService.setItem(LocalStorageKeys.REFRESH_TOKEN, this.refreshToken);
  }

  public getToken(): string | undefined {
    return this.token;
  }

  public refresh(): Promise<string> {
    const refreshToken = this.refreshToken;

    if (!refreshToken) {
      return Promise.reject(new Error('No refresh token available'));
    }

    return this.userService.refresh(refreshToken).then((tokens) => {
      this.setTokens(tokens.token, tokens.refreshToken);
      return tokens.token;
    });
  }

  private decodeUserFromToken(): void {
    if (!this.token) {
      return;
    }

    const jwtContent = jwtDecode<Record<string, string>>(this.token);

    this.user = {
      id: jwtContent['sub'] ?? '',
      username: jwtContent['username'] ?? '',
      role: (jwtContent['role'] as UserRole) ?? '',
    };
  }
}
