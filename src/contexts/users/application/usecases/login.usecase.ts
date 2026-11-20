import { inject, Injectable } from '@angular/core';
import { UseCase } from '../../../shared/application/usecase';
import { Credentials } from '../../domain/entities/credentials.entity';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginUseCase extends UseCase<Credentials, boolean> {
  private readonly userService = inject(UserService);

  override execute(credentials: Credentials): Promise<boolean> {
    return this.userService
      .loginUser(credentials)
      .catch(() => false)
      .then(() => true);
  }
}
