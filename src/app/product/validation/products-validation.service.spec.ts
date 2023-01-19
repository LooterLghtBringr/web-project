import { TestBed } from '@angular/core/testing';

import { ProductsValidationService } from './products-validation.service';

describe('ProductsValidationService', () => {
  let service: ProductsValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
