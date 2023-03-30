import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of} from 'rxjs'
import {TagsPopularService} from 'src/app/shared/modules/tags-popular/services/tags-popular.service'
import {
  getTagsPopularAction,
  getTagsPopularFailureAction,
  getTagsPopularSuccessAction,
} from 'src/app/shared/modules/tags-popular/store/actions/get-tags-popular.actions'

import {PopularTag} from 'src/app/shared/types/popular-tag.type'

@Injectable()
export class GetTagPopularEffect {
  constructor(
    private actions$: Actions,
    private tagsPopularService: TagsPopularService
  ) {}

  getTagsPopular$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTagsPopularAction),
      exhaustMap(() =>
        this.tagsPopularService.getTagsPopular().pipe(
          map((popularTags: PopularTag[]) =>
            getTagsPopularSuccessAction({tagsPopular: popularTags})
          ),
          catchError(() => of(getTagsPopularFailureAction()))
        )
      )
    )
  )
}
