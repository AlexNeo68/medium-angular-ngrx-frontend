import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, of } from 'rxjs'
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from 'src/app/article-edit/store/actions/get-article.actions'

import { ArticleService as ArticleServiceShared } from 'src/app/shared/services/article.service'


@Injectable()
export class GetArticleEffects {
  constructor(
    private actions$: Actions,
    private articleServiceShared: ArticleServiceShared,
  ) { }

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      exhaustMap(({ slug }) =>
        this.articleServiceShared.getArticle(slug).pipe(
          map((article) => getArticleSuccessAction({ article })),
          catchError((response: HttpErrorResponse) =>
            of(getArticleFailureAction())
          )
        )
      )
    )
  )


}
