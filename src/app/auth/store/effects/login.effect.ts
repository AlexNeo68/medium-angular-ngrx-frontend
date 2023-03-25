import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of, tap} from 'rxjs'
import {AuthService} from 'src/app/auth/services/auth.service'
import {
  loginAction,
  loginActionFailure,
  loginActionSuccess,
} from 'src/app/auth/store/actions/login.action'

import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      exhaustMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return loginActionSuccess({currentUser})
          }),
          catchError((error: HttpErrorResponse) =>
            of(loginActionFailure({errors: error.error.errors}))
          )
        )
      })
    )
  )

  successLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginActionSuccess),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {
      dispatch: false,
    }
  )
}
