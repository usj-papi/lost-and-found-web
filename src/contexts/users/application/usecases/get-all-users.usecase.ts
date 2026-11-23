import { inject, Injectable } from '@angular/core';
import { UseCase } from '../../../shared/application/usecase';
import { User } from '../../domain/entities/user.entity';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class GetAllUsersUseCase extends UseCase<void, User[]> {
  private readonly userService = inject(UserService);

  override execute(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
