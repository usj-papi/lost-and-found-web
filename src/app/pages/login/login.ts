import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { LoginUseCase } from '../../../contexts/users/application/usecases/login.usecase';
import { Credentials } from '../../../contexts/users/domain/entities/credentials.entity';

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly router = inject(Router);
  private readonly loginUseCase = inject(LoginUseCase);
  private readonly isLoggingIn = signal(false);

  private loginModel = signal<Credentials>({
    username: '',
    password: '',
  });

  protected loginForm = form(this.loginModel, (schema) => {
    required(schema.username);
    required(schema.password);
  });

  public handleLogin(event: Event) {
    event.preventDefault();

    if (this.loginForm().valid()) {
      this.isLoggingIn.set(true);

      const user = this.loginModel();
      this.loginUseCase
        .execute(user)
        .then((createdUser) => {
          this.router.navigate(['/auth/login']);
        })
        .finally(() => {
          this.isLoggingIn.set(false);
        });
    }
  }
}
