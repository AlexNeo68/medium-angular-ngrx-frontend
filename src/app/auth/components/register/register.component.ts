import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {AuthService} from 'src/app/auth/services/auth.service'
import {registerAction} from 'src/app/auth/store/actions/register.action'
import {
  authIsSubmittingSelector,
  authValidationErrorsSelector,
} from 'src/app/auth/store/selectors'
import {RegisterRequestInterface} from 'src/app/auth/types/register-request.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  validationErrors$: Observable<BackendErrorsInterface>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeValue()
    this.initializeForm()
  }

  initializeValue(): void {
    this.isSubmitting$ = this.store.pipe(select(authIsSubmittingSelector))
    this.validationErrors$ = this.store.pipe(
      select(authValidationErrorsSelector)
    )
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }
}
