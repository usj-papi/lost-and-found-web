import { Component, inject, OnInit, signal } from '@angular/core';
import { GetAllUsersUseCase } from '../../../contexts/users/application/usecases/get-all-users.usecase';
import { User } from '../../../contexts/users/domain/entities/user.entity';

@Component({
  imports: [],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users implements OnInit {
  private readonly getAllUsersUseCase = inject(GetAllUsersUseCase);

  private readonly users = signal<User[]>([]);

  ngOnInit(): void {
    this.getAllUsersUseCase.execute().then((users) => {
      this.users.set(users);
    });
  }
}
