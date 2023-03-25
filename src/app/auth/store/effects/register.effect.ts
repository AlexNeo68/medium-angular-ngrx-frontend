import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of, switchMap, tap} from 'rxjs'
import {AuthService} from 'src/app/auth/services/auth.service'
import {
  registerAction,
  registerActionFailure,
  registerActionSuccess,
} from 'src/app/auth/store/actions/register.action'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      exhaustMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return registerActionSuccess({currentUser})
          }),
          catchError((error: HttpErrorResponse) =>
            of(registerActionFailure({errors: error.error.errors}))
          )
        )
      })
    )
  )

  successRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerActionSuccess),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {
      dispatch: false,
    }
  )
}
