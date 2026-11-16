import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LostObjectRepository } from '../contexts/lost-object/domain/lost-object.contract.repository';
import { LostObjectHttpRepository } from '../contexts/lost-object/infrastructure/lost-object.http.repository';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: LostObjectRepository, useClass: LostObjectHttpRepository },
  ],
};
