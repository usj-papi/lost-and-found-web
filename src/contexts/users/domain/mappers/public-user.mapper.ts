import { Mapper } from '../../../shared/domain/mappers/mapper.contract';
import { PublicUserDTO } from '../dtos/public-user.dto';
import { User } from '../entities/user.entity';

export class PublicUserMapper implements Mapper<User, PublicUserDTO> {
  toDTO(entity: User): PublicUserDTO {
    if (!entity.createdAt || !entity.name || !entity.email) {
      throw new Error('Missing required fields in User entity');
    }

    return {
      id: entity.id,
      username: entity.username,
      name: entity.name,
      role: entity.role,
      email: entity.email,
      created_at: entity.createdAt.toISOString(),
    };
  }

  toEntity(dto: PublicUserDTO): User {
    return {
      id: dto.id,
      username: dto.username,
      name: dto.name,
      role: dto.role,
      email: dto.email,
      createdAt: new Date(dto.created_at),
    };
  }
}
