import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMostrarComponent } from './consulta-mostrar.component';

describe('ConsultaMostrarComponent', () => {
  let component: ConsultaMostrarComponent;
  let fixture: ComponentFixture<ConsultaMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
