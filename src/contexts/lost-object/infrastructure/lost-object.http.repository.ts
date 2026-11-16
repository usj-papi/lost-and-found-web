import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environment';
import { LostObjectDTO } from '../domain/dtos/lost-object.dto';
import { LostObjectRepository } from '../domain/lost-object.contract.repository';

@Injectable({
  providedIn: 'root',
})
export class LostObjectHttpRepository extends LostObjectRepository {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  override findAll(): Promise<LostObjectDTO[]> {
    return firstValueFrom(this.httpClient.get<LostObjectDTO[]>(`${this.apiUrl}/lost-objects`));
  }
}
