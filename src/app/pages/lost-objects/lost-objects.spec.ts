import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LostObjects } from './lost-objects';

describe('LostObjects', () => {
  let component: LostObjects;
  let fixture: ComponentFixture<LostObjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LostObjects],
    }).compileComponents();

    fixture = TestBed.createComponent(LostObjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
