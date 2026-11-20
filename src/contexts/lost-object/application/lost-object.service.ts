import { inject, Injectable } from '@angular/core';
import { LostObject } from '../domain/entities/lost-object.entity';
import { LostObjectRepository } from '../domain/lost-object.contract.repository';
import { LostObjectMapper } from '../domain/mappers/lost-object.mapper';

@Injectable({
  providedIn: 'root',
})
export class LostObjectService {
  private readonly lostObjectsRepository = inject(LostObjectRepository);
  private readonly lostObjectMapper = new LostObjectMapper();

  findAllLostObjects(): Promise<LostObject[]> {
    return this.lostObjectsRepository
      .findAll()
      .then((lostObjectsDTO) => lostObjectsDTO.map((dto) => this.lostObjectMapper.toEntity(dto)));
  }
}
