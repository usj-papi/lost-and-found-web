import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LostObjectsDetail } from './lost-objects-detail';

describe('LostObjectsDetail', () => {
  let component: LostObjectsDetail;
  let fixture: ComponentFixture<LostObjectsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LostObjectsDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(LostObjectsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
