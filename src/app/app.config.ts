import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LostObjectRepository } from '../contexts/lost-object/domain/lost-object.contract.repository';
import { LostObjectHttpRepository } from '../contexts/lost-object/infrastructure/lost-object.http.repository';
import { UserRepository } from '../contexts/users/domain/user.contract.repository';
import { UserHttpRepository } from '../contexts/users/infrastructure/user.http.repository';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { errorsInterceptor } from './interceptors/errors.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, errorsInterceptor])),
    { provide: LostObjectRepository, useClass: LostObjectHttpRepository },
    { provide: UserRepository, useClass: UserHttpRepository },
  ],
};
