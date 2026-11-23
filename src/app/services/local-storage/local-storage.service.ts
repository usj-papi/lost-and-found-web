import { Service } from '@angular/core';

export enum LocalStorageKeys {
  USER = 'user',
  TOKEN = 'token',
  REFRESH_TOKEN = 'refreshToken',
}

@Service()
export class LocalStorageService {
  public setItem(key: LocalStorageKeys, value: string): void {
    localStorage.setItem(key, value);
  }

  public getItem(key: LocalStorageKeys): string | null {
    return localStorage.getItem(key);
  }

  public removeItem(key: LocalStorageKeys): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
