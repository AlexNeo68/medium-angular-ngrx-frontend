import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of} from 'rxjs'
import {FavoritesService} from 'src/app/shared/modules/favorited/services/favorites.service'
import {
  FavoritesAction,
  FavoritesActionFailure,
  FavoritesActionSuccess,
} from 'src/app/shared/modules/favorited/store/actions/favorites.actions'
import {ArticleInterface} from 'src/app/shared/types/article.interface'

@Injectable()
export class FavoritedEffects {
  constructor(
    private favoritesService: FavoritesService,
    private $actions: Actions
  ) {}

  favoritesEffect$ = createEffect(() =>
    this.$actions.pipe(
      ofType(FavoritesAction),
      exhaustMap(({isFavorited, slug}) => {
        const article$ = isFavorited
          ? this.favoritesService.removeFromFavorite(slug)
          : this.favoritesService.addToFavorite(slug)

        return article$.pipe(
          map((article: ArticleInterface) => FavoritesActionSuccess({article})),
          catchError(() => of(FavoritesActionFailure()))
        )
      })
    )
  )
}
