/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DettaglioService } from './dettaglio.service';

describe('Service: Dettaglio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DettaglioService]
    });
  });

  it('should ...', inject([DettaglioService], (service: DettaglioService) => {
    expect(service).toBeTruthy();
  }));
});
