import { TestBed } from '@angular/core/testing';

import { SimpleInterceptor } from './simple.interceptor';

describe('SimpleInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SimpleInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SimpleInterceptor = TestBed.inject(SimpleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
