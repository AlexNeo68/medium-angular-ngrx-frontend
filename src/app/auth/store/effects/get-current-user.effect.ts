import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of, tap} from 'rxjs'
import {AuthService} from 'src/app/auth/services/auth.service'
import {
  getCurrentUserAction,
  getCurrentUserActionFailure,
  getCurrentUserActionSuccess,
} from 'src/app/auth/store/actions/get-current-user.action'

import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      exhaustMap(() => {
        const accessToken = this.persistanceService.get('accessToken')
        if (!accessToken) return of(getCurrentUserActionFailure())
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserActionSuccess({currentUser})
          }),
          catchError((error: HttpErrorResponse) =>
            of(getCurrentUserActionFailure())
          )
        )
      })
    )
  )
}
