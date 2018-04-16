/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CritereaService } from './criterea.service';

describe('CritereaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CritereaService]
    });
  });

  it('should ...', inject([CritereaService], (service: CritereaService) => {
    expect(service).toBeTruthy();
  }));
});
