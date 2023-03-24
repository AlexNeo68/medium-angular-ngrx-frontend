import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of, switchMap} from 'rxjs'
import {AuthService} from 'src/app/auth/services/auth.service'
import {
  registerAction,
  registerActionFailure,
  registerActionSuccess,
} from 'src/app/auth/store/actions/register.action'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      exhaustMap(({request}) => {
        console.log(request)
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerActionSuccess({currentUser})
          }),
          catchError((error: HttpErrorResponse) =>
            of(registerActionFailure({errors: error.error.errors}))
          )
        )
      })
    )
  )
}
