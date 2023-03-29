import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {getFeedAction} from 'src/app/shared/modules/feed/store/actions/get-feed.actions'
import {
  feedDataSelector,
  feedErrorSelector,
  feedIsLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors'
import {FeedResponseInterface} from 'src/app/shared/modules/feed/types/feed-response.interface'
import {environment} from 'src/environments/environments'
import queryString from 'query-string'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>
  error$: Observable<string>
  data$: Observable<FeedResponseInterface>

  limit: number
  currentPage: number
  baseUrl: string

  urlParamsSubscription: Subscription

  @Input('apiUrl') apiUrlProps: string

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.urlParamsSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(feedIsLoadingSelector))
    this.error$ = this.store.pipe(select(feedErrorSelector))
    this.data$ = this.store.pipe(select(feedDataSelector))

    this.limit = environment.limit
    this.baseUrl = this.router.url.split('?')[0]
  }

  initializeListeners(): void {
    this.urlParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1')
        this.fetchFeed()
      }
    )
  }

  fetchFeed(): void {
    const parsedUrl = queryString.parseUrl(this.apiUrlProps)

    const offset = this.currentPage * this.limit - this.limit

    const newParams = {
      ...parsedUrl.query,
      limit: this.limit,
      offset,
    }
    const urlWithParams = `${this.apiUrlProps}?${queryString.stringify(
      newParams
    )}`
    this.store.dispatch(getFeedAction({url: urlWithParams}))
  }
}
