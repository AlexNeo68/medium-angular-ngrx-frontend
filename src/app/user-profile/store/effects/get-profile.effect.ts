import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of} from 'rxjs'
import {UserProfileService} from 'src/app/user-profile/services/user-profile.service'
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from 'src/app/user-profile/store/actions/get-profile.actions'

@Injectable()
export class UserProfileEffect {
  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService
  ) {}

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      exhaustMap(({slug}) =>
        this.userProfileService.getProfile(slug).pipe(
          map((profile) => getUserProfileSuccessAction({userProfile: profile})),
          catchError(() => of(getUserProfileFailureAction()))
        )
      )
    )
  )
}
