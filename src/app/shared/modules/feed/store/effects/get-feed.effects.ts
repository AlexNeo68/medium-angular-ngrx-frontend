import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of} from 'rxjs'
import {FeedService} from 'src/app/shared/modules/feed/services/feed.service'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions/get-feed.actions'
import {FeedResponseInterface} from 'src/app/shared/modules/feed/types/feed-response.interface'

@Injectable()
export class GetFeedEffect {
  constructor(private feedService: FeedService, private actions$: Actions) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      exhaustMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: FeedResponseInterface) => {
            return getFeedSuccessAction({feed})
          }),
          catchError(() => of(getFeedFailureAction()))
        )
      })
    )
  )
}
