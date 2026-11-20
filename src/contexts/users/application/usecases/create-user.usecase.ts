import { inject, Injectable } from '@angular/core';
import { UseCase } from '../../../shared/application/usecase';
import { CreateUser } from '../../domain/entities/create-user.entity';
import { User } from '../../domain/entities/user.entity';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class CreateUserUseCase extends UseCase<CreateUser, User> {
  private readonly userService = inject(UserService);

  override execute(user: CreateUser): Promise<User> {
    return this.userService.createUser(user);
  }
}
