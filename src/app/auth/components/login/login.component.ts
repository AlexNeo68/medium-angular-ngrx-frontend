import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {loginAction} from 'src/app/auth/store/actions/login.action'
import {
  authIsSubmittingSelector,
  authValidationErrorsSelector,
} from 'src/app/auth/store/selectors'
import {LoginRequestInterface} from 'src/app/auth/types/login-request.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  validationErrors$: Observable<BackendErrorsInterface>

  constructor(private fb: FormBuilder, private store: Store) {}

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
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(loginAction({request}))
  }
}
