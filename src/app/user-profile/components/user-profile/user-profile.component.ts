import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable, Subscription, filter, map} from 'rxjs'
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
export class UserProfileComponent implements OnInit {
  isLoading$: Observable<boolean>
  error$: Observable<string>

  slug: string
  slugSubscription: Subscription

  userProfile: ProfileInterface | null
  userProfileSubscription: Subscription

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  initializeListeners(): void {
    this.slugSubscription = this.route.params.subscribe((params: Params) => {
      this.slug = params['slug']
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
  }

  fetchData(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }
}
