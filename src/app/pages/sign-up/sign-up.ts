import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { CreateUserUseCase } from '../../../contexts/users/application/usecases/create-user.usecase';
import { CreateUser } from '../../../contexts/users/domain/entities/create-user.entity';

@Component({
  imports: [FormField],
  selector: 'app-sign-up',
  styleUrl: './sign-up.css',
  templateUrl: './sign-up.html',
})
export class SignUp {
  private readonly router = inject(Router);
  private readonly createUserUseCase = inject(CreateUserUseCase);

  private readonly isCreating = signal(false);

  private signUpModel = signal<CreateUser>({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  protected signUpForm = form(this.signUpModel, (schema) => {
    required(schema.name);
    required(schema.username);
    required(schema.email);
    required(schema.password);
    email(schema.email);
  });

  public handleSignUp(event: Event) {
    event.preventDefault();

    if (this.signUpForm().valid()) {
      this.isCreating.set(true);

      const user = this.signUpModel();
      this.createUserUseCase
        .execute(user)
        .then((createdUser) => {
          this.router.navigate(['/auth/login']);
        })
        .finally(() => {
          this.isCreating.set(false);
        });
    }
  }
}
