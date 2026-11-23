import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, from, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

export function errorsInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {
      const isUnauthorized =
        error instanceof HttpErrorResponse && error.status === HttpStatusCode.Unauthorized;

      const isAuthRequest = req.url.includes('/auth/login') || req.url.includes('/auth/refresh');

      if (!isUnauthorized || isAuthRequest) {
        return throwError(() => error);
      }

      return from(authService.refresh()).pipe(
        catchError((refreshError) => {
          return throwError(() => refreshError);
        }),
        switchMap((newToken) => {
          const authReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${newToken}`,
            },
          });

          return next(authReq);
        }),
      );
    }),
  );
}
