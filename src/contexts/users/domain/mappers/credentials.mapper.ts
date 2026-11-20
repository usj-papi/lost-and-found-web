import { Mapper } from '../../../shared/domain/mappers/mapper.contract';
import { CredentialsDTO } from '../dtos/credentials.dto';
import { Credentials } from '../entities/credentials.entity';

export class CredentialsMapper implements Mapper<Credentials, CredentialsDTO> {
  toDTO(entity: Credentials): CredentialsDTO {
    return {
      username: entity.username,
      password: entity.password,
    };
  }

  toEntity(dto: CredentialsDTO): Credentials {
    return {
      username: dto.username,
      password: dto.password,
    };
  }
}
