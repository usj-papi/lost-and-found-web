import { LostObjectStatusDTO } from '../dtos/lost-object.dto';
import { LostObjectStatus } from '../entities/lost-object.entity';

export class LostObjectStatusMapper {
  static toDTO(status: LostObjectStatus): LostObjectStatusDTO {
    return status as LostObjectStatusDTO;
  }

  static toEntity(status: LostObjectStatusDTO): LostObjectStatus {
    return status as LostObjectStatus;
  }
}
