import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of, tap} from 'rxjs'
import {AuthService} from 'src/app/auth/services/auth.service'
import {
  updateCurrentUserAction,
  updateCurrentUserActionFailure,
  updateCurrentUserActionSuccess,
} from 'src/app/auth/store/actions/update-current-user.action'
import {CurrentUserInputInterface} from 'src/app/shared/types/current-user-input.interface'

import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

@Injectable()
export class UpdateCurrentUserEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      exhaustMap(({currentUserInput}) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: CurrentUserInterface) =>
            updateCurrentUserActionSuccess({currentUser})
          ),
          catchError((errors: HttpErrorResponse) =>
            of(updateCurrentUserActionFailure({errors: errors.error.errors}))
          )
        )
      })
    )
  )
}
