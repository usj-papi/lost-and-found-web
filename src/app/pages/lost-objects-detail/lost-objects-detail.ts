import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { LostObject } from '../../../contexts/lost-object/domain/entities/lost-object.entity';
import { MyButton } from '../../components/my-button/my-button';

@Component({
  imports: [JsonPipe, MyButton],
  selector: 'app-lost-objects-detail',
  styleUrl: './lost-objects-detail.css',
  templateUrl: './lost-objects-detail.html',
})
export class LostObjectsDetail {
  protected readonly lostObjectId = signal<LostObject>({
    id: '1',
    name: 'Sample Lost Object',
    description: 'This is a sample lost object.',
    location: 'Sample Location',
    status: 'stored',
  });

  incrementId() {
    this.lostObjectId.update((current) => ({
      ...current,
      id: (parseInt(current.id) + 1).toString(),
    }));
  }
}
