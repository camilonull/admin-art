import { TestBed } from '@angular/core/testing';

import { ExampleStyleService } from './example-style.service';

describe('ExampleStyleService', () => {
  let service: ExampleStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
