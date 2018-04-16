/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneralCritereaImpactService } from './general-criterea-impact.service';

describe('GeneralCritereaImpactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralCritereaImpactService]
    });
  });

  it('should ...', inject([GeneralCritereaImpactService], (service: GeneralCritereaImpactService) => {
    expect(service).toBeTruthy();
  }));
});
