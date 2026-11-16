import { inject, Injectable } from '@angular/core';
import { UseCase } from '../../../shared/application/usecase';
import { LostObject } from '../../domain/entities/lost-object.entity';
import { LostObjectService } from '../lost-object.service';

@Injectable({
  providedIn: 'root',
})
export class FindLostObjectsUseCase extends UseCase<void, LostObject[]> {
  private readonly lostObjectService = inject(LostObjectService);

  override execute(): Promise<LostObject[]> {
    return this.lostObjectService.findAllLostObjects();
  }
}
