import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of} from 'rxjs'
import {
  GetArticleAction,
  GetArticleFailureAction,
  GetArticleSuccessAction,
} from 'src/app/article/store/actions/get-article.actions'
import {ArticleService as ArticleServiceShared} from 'src/app/shared/services/article.service'
import {ArticleInterface} from 'src/app/shared/types/article.interface'

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private articlesService: ArticleServiceShared
  ) {}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetArticleAction),
      exhaustMap(({slug}) =>
        this.articlesService.getArticle(slug).pipe(
          map((article: ArticleInterface) =>
            GetArticleSuccessAction({article})
          ),
          catchError(() => of(GetArticleFailureAction()))
        )
      )
    )
  )
}
