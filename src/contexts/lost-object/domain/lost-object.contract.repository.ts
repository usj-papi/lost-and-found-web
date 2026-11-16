import { Injectable } from '@angular/core';
import { LostObjectDTO } from './dtos/lost-object.dto';

@Injectable({
  providedIn: 'root',
})
export abstract class LostObjectRepository {
  abstract findAll(): Promise<LostObjectDTO[]>;
}
