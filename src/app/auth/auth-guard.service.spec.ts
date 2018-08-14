import { TestBed, inject } from '@angular/core/testing'

import { AuthGuard } from './auth-guard.service'
import { AuthService } from './auth.service'
import { AuthServiceFake } from './auth.service.fake'
import { UIService } from '../common/ui.service'
// import { commonTestingModules } from '../common/common.testing'
// commonTestingModules
describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: AuthServiceFake },
        UIService,
      ],
    })
  })

  it(
    'should be created',
    inject([AuthGuard], (service: AuthGuard) => {
      expect(service).toBeTruthy()
    })
  )
})
