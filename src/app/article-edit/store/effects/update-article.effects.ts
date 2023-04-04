import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, of, tap } from 'rxjs'
import { ArticleUpdateService } from 'src/app/article-edit/services/article-update.service'
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from 'src/app/article-edit/store/actions/update-article.actions'
import { ArticleNewService } from 'src/app/article-new/services/article-new.service'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from 'src/app/article-new/store/actions/create-article.actions'


@Injectable()
export class UpdateArticleEffects {
  constructor(
    private actions$: Actions,
    private articleUpdateService: ArticleUpdateService,
    private router: Router
  ) { }

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      exhaustMap(({ slug, articleInput }) =>
        this.articleUpdateService.updateArticle(slug, articleInput).pipe(
          map((article) => updateArticleSuccessAction({ article })),
          catchError((response: HttpErrorResponse) =>
            of(updateArticleFailureAction({ errors: response.error.errors }))
          )
        )
      )
    )
  )

  successUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    {
      dispatch: false,
    }
  )
}
