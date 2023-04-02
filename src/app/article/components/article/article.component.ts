import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {combineLatest, map, Observable, Subscription} from 'rxjs'
import {DeleteArticleAction} from 'src/app/article/store/actions/delete-article.actions'
import {GetArticleAction} from 'src/app/article/store/actions/get-article.actions'
import {
  getArticleDataSelector,
  getArticleErrorSelector,
  getArticleIsLoadingSelector,
} from 'src/app/article/store/selectors'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slugSubscription: Subscription
  articleSubscription: Subscription
  slug: string
  article: ArticleInterface
  isLoading$: Observable<boolean>
  error$: Observable<string>
  isAuthor$: Observable<boolean>

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  initializeListeners(): void {
    this.slugSubscription = this.route.params.subscribe((params: Params) => {
      this.slug = params['slug']
    })
    this.articleSubscription = this.store
      .pipe(select(getArticleDataSelector))
      .subscribe((article: ArticleInterface) => {
        this.article = article
      })
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(getArticleIsLoadingSelector))
    this.error$ = this.store.pipe(select(getArticleErrorSelector))
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(currentUserSelector)),
      this.store.pipe(select(getArticleDataSelector))
    ).pipe(
      map(([user, article]: [CurrentUserInterface, ArticleInterface]) => {
        if (!user || !article) return false
        return user.username === article.author.username
      })
    )
  }

  ngOnDestroy(): void {
    this.slugSubscription.unsubscribe()
    this.articleSubscription.unsubscribe
  }

  fetchData(): void {
    this.store.dispatch(GetArticleAction({slug: this.slug}))
  }

  deleteArticle(): void {
    this.store.dispatch(DeleteArticleAction({slug: this.slug}))
  }
}
