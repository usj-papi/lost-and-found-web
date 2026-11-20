import { Mapper } from '../../../shared/domain/mappers/mapper.contract';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { CreateUser } from '../entities/create-user.entity';

export class CreateUserMapper implements Mapper<CreateUser, CreateUserDTO> {
  toDTO(entity: CreateUser): CreateUserDTO {
    return {
      email: entity.email,
      username: entity.username,
      password: entity.password,
      name: entity.name,
    };
  }

  toEntity(dto: CreateUserDTO): CreateUser {
    return {
      email: dto.email,
      username: dto.username,
      password: dto.password,
      name: dto.name,
    };
  }
}
