import { Mapper } from '../../../shared/domain/mappers/mapper.contract';
import { LostObjectDTO } from '../dtos/lost-object.dto';
import { LostObject } from '../entities/lost-object.entity';
import { LostObjectStatusMapper } from './lost-object-status.mapper';

export class LostObjectMapper implements Mapper<LostObject, LostObjectDTO> {
  toDTO(entity: LostObject): LostObjectDTO {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      location: entity.location,
      status: LostObjectStatusMapper.toDTO(entity.status),
    };
  }

  toEntity(dto: LostObjectDTO): LostObject {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      location: dto.location,
      status: LostObjectStatusMapper.toEntity(dto.status),
    };
  }
}
