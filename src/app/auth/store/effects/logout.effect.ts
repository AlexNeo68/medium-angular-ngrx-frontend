import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {exhaustMap, tap} from 'rxjs'
import {logoutAction} from 'src/app/auth/store/actions/logout.action'
import {PersistanceService} from 'src/app/shared/services/persistance.service'

@Injectable()
export class logoutEffect {
  constructor(
    private actions$: Actions,
    private persistenceService: PersistanceService,
    private router: Router
  ) {}

  logoutEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persistenceService.setToken('')
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )
}
