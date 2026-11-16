import { Routes } from '@angular/router';
import { LostObjectsDetail } from '../pages/lost-objects-detail/lost-objects-detail';
import { LostObjects } from '../pages/lost-objects/lost-objects';

export const lostObjectRoutes: Routes = [
  {
    path: 'lost-objects',
    component: LostObjects,
  },
  {
    path: 'lost-objects/:id',
    component: LostObjectsDetail,
  },
];
