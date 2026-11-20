import { Mapper } from '../../../shared/domain/mappers/mapper.contract';
import { TokensDTO } from '../dtos/tokens.dto';
import { Tokens } from '../entities/tokens.entity';

export class TokensMapper implements Mapper<Tokens, TokensDTO> {
  toDTO(entity: Tokens): TokensDTO {
    return {
      token: entity.token,
      refreshToken: entity.refreshToken,
    };
  }

  toEntity(dto: TokensDTO): Tokens {
    return {
      token: dto.token,
      refreshToken: dto.refreshToken,
    };
  }
}
