import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Observable, Subscription, filter, tap } from 'rxjs'
import { getArticleAction } from 'src/app/article-edit/store/actions/get-article.actions'
import { updateArticleAction } from 'src/app/article-edit/store/actions/update-article.actions'
import { articleUpdateArticleSelector, errorsUpdateArticleSelector, isLoadingUpdateArticleSelector, isSubmittingUpdateArticleSelector } from 'src/app/article-edit/store/selectors'


import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
})
export class ArticleEditComponent implements OnInit, OnDestroy {
  slug: string = ''

  initialValues$: Observable<ArticleInterface>
  isSubmitting$: Observable<boolean>
  isLoading$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface>

  slugSubscription: Subscription

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListener()
    this.fetchData();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingUpdateArticleSelector)
    )
    this.errors$ = this.store.pipe(select(errorsUpdateArticleSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingUpdateArticleSelector))

    this.initialValues$ = this.store.pipe(select(articleUpdateArticleSelector), filter(Boolean), tap((article: ArticleInterface) => ({
      title: article.title,
      body: article.body,
      description: article.description,
      tagList: article.tagList,
    })))
  }

  initializeListener(): void {
    this.slugSubscription = this.route.params.subscribe((params: Params) => {
      this.slug = params['slug']
    })
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  onUpdateArticle(formValues: ArticleInputInterface) {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput: formValues }))
  }

  ngOnDestroy(): void {
    this.slugSubscription.unsubscribe()
  }
}
