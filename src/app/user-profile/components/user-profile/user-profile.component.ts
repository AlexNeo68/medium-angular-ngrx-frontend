import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable, Subscription, combineLatest, filter, map} from 'rxjs'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {ProfileInterface} from 'src/app/shared/types/profile.interface'
import {getUserProfileAction} from 'src/app/user-profile/store/actions/get-profile.actions'
import {
  dataUserProfileSelector,
  errorsUserProfileSelector,
  isLoadingUserProfileSelector,
} from 'src/app/user-profile/store/selectors'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>
  error$: Observable<string>
  isCurrentUserProfile$: Observable<boolean>

  slug: string
  slugSubscription: Subscription

  userProfile: ProfileInterface | null
  userProfileSubscription: Subscription

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.slugSubscription.unsubscribe()
    this.userProfileSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.initializeListeners()
    this.initializeValues()
    this.fetchData()
  }

  initializeListeners(): void {
    this.slugSubscription = this.route.params.subscribe((params: Params) => {
      this.slug = params['slug']

      this.fetchData()
    })
    this.userProfileSubscription = this.store
      .pipe(
        select(dataUserProfileSelector),
        filter(Boolean),
        map((userProfile: ProfileInterface) => userProfile)
      )
      .subscribe((userProfile: ProfileInterface) => {
        this.userProfile = userProfile
      })
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingUserProfileSelector))
    this.error$ = this.store.pipe(select(errorsUserProfileSelector))

    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(dataUserProfileSelector), filter(Boolean)),
      this.store.pipe(select(currentUserSelector), filter(Boolean))
    ).pipe(
      map(
        ([userProfile, currentUser]: [
          ProfileInterface,
          CurrentUserInterface
        ]) => {
          return userProfile.username === currentUser.username
        }
      )
    )
  }

  fetchData(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }

  getApiUrl(): string {
    return this.router.url.includes('favorites')
      ? '/articles?favorited=' + this.slug
      : '/articles?author=' + this.slug
  }
}
