import { TestBed } from '@angular/core/testing';

import { TipoexamenService } from './tipoexamen.service';

describe('TipoexamenService', () => {
  let service: TipoexamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoexamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
