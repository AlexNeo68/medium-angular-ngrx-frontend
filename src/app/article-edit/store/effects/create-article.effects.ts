import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of, tap} from 'rxjs'
import {ArticleNewService} from 'src/app/article-new/services/article-new.service'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from 'src/app/article-new/store/actions/create-article.actions'
import {ArticleInterface} from 'src/app/shared/types/article.interface'

@Injectable()
export class CreateArticleEffects {
  constructor(
    private actions$: Actions,
    private articleNewService: ArticleNewService,
    private router: Router
  ) {}

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      exhaustMap(({articleInput}) =>
        this.articleNewService.createArticle(articleInput).pipe(
          map((article) => createArticleSuccessAction({article})),
          catchError((response: HttpErrorResponse) =>
            of(createArticleFailureAction({errors: response.error.errors}))
          )
        )
      )
    )
  )

  successCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    {
      dispatch: false,
    }
  )
}
