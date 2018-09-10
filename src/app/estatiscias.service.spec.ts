import { TestBed, inject } from '@angular/core/testing';

import { EstatisciasService } from './estatiscias.service';

describe('EstatisciasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstatisciasService]
    });
  });

  it('should be created', inject([EstatisciasService], (service: EstatisciasService) => {
    expect(service).toBeTruthy();
  }));
});
