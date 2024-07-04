import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartthreeComponent } from './chartthree.component';

describe('ChartthreeComponent', () => {
  let component: ChartthreeComponent;
  let fixture: ComponentFixture<ChartthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
