import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of, tap} from 'rxjs'
import {ArticleService} from 'src/app/article/services/article.service'
import {
  DeleteArticleAction,
  DeleteArticleFailureAction,
  DeleteArticleSuccessAction,
} from 'src/app/article/store/actions/delete-article.actions'

@Injectable()
export class DeleteArticleEffect {
  constructor(
    private actions$: Actions,
    private articlesService: ArticleService,
    private router: Router
  ) {}

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteArticleAction),
      exhaustMap(({slug}) =>
        this.articlesService.deleteArticle(slug).pipe(
          map(() => DeleteArticleSuccessAction()),
          catchError(() => of(DeleteArticleFailureAction()))
        )
      )
    )
  )

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DeleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        })
      ),
    {
      dispatch: false,
    }
  )
}
