import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterActionComponent } from './master-action.component';

describe('MasterActionComponent', () => {
  let component: MasterActionComponent;
  let fixture: ComponentFixture<MasterActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
