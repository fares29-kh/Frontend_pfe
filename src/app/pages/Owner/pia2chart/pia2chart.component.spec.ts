import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pia2chartComponent } from './pia2chart.component';

describe('Pia2chartComponent', () => {
  let component: Pia2chartComponent;
  let fixture: ComponentFixture<Pia2chartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pia2chartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pia2chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
