import { Component, inject, OnInit, signal } from '@angular/core';
import { FindLostObjectsUseCase } from '../../../contexts/lost-object/application/usecases/find-lost-objects.usecase';
import { LostObject } from '../../../contexts/lost-object/domain/entities/lost-object.entity';

@Component({
  imports: [],
  selector: 'app-lost-objects',
  styleUrl: './lost-objects.css',
  templateUrl: './lost-objects.html',
})
export class LostObjects implements OnInit {
  private readonly findAllLostObjectsUseCase = inject(FindLostObjectsUseCase);

  public lostObjects = signal<LostObject[] | null>(null);

  ngOnInit() {
    this.findAllLostObjectsUseCase.execute().then((lostObjects) => {
      this.lostObjects.set(lostObjects);
    });
  }
}
