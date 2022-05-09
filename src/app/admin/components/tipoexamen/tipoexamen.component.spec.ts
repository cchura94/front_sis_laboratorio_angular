import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoexamenComponent } from './tipoexamen.component';

describe('TipoexamenComponent', () => {
  let component: TipoexamenComponent;
  let fixture: ComponentFixture<TipoexamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoexamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
