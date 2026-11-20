import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { authRoutes } from './routes/auth.routes';
import { lostObjectRoutes } from './routes/lost-object.routes';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contact',
    component: Contact,
  },
  ...lostObjectRoutes,
  {
    path: 'auth',
    children: authRoutes,
  },
];
