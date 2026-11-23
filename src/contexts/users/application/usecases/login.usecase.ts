import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../../../app/services/auth/auth.service';
import { UseCase } from '../../../shared/application/usecase';
import { Credentials } from '../../domain/entities/credentials.entity';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginUseCase extends UseCase<Credentials, boolean> {
  private readonly userService = inject(UserService);
  private readonly authService = inject(AuthService);

  override execute(credentials: Credentials): Promise<boolean> {
    return this.userService
      .loginUser(credentials)
      .then((tokens) => {
        if (!tokens) {
          return false;
        }

        this.authService.setTokens(tokens.token, tokens.refreshToken);
        return true;
      })
      .catch(() => false);
  }
}
