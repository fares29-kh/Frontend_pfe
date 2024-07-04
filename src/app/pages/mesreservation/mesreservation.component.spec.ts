import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesreservationComponent } from './mesreservation.component';

describe('MesreservationComponent', () => {
  let component: MesreservationComponent;
  let fixture: ComponentFixture<MesreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesreservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
