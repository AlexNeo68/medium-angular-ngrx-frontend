import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {filter, Observable, Subscription} from 'rxjs'
import {logoutAction} from 'src/app/auth/store/actions/logout.action'
import {updateCurrentUserAction} from 'src/app/auth/store/actions/update-current-user.action'
import {
  authIsLoadingSelector,
  currentUserSelector,
} from 'src/app/auth/store/selectors'
import {
  errorsSettingsSelector,
  isSubmittingSettingsSelector,
} from 'src/app/settings/store/selectors'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  isSubmitting$: Observable<boolean>
  isLoadding$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface>

  currentUserSubscription: Subscription

  currentUser: CurrentUserInterface

  formSetting: FormGroup

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeListener()
    this.initializeValues()
    this.initializeForm()
  }
  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe()
  }

  initializeListener(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser
        this.initializeForm()
      })
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSettingsSelector))
    this.isLoadding$ = this.store.pipe(select(authIsLoadingSelector))
    this.backendErrors$ = this.store.pipe(select(errorsSettingsSelector))
  }

  initializeForm(): void {
    this.formSetting = this.fb.group({
      email: this.currentUser?.email,
      username: this.currentUser?.username,
      bio: this.currentUser?.bio,
      image: this.currentUser?.image,
      password: '',
    })
  }

  onSubmit(): void {
    const userTarget = {
      ...this.currentUser,
      ...this.formSetting.value,
    }

    this.store.dispatch(updateCurrentUserAction({currentUserInput: userTarget}))
  }
  onLogout(): void {
    this.store.dispatch(logoutAction())
  }
}
