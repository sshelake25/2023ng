import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthHistoryComponent } from './birth-history.component';

describe('BirthHistoryComponent', () => {
  let component: BirthHistoryComponent;
  let fixture: ComponentFixture<BirthHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
