import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AuthRoutingModule} from './auth-routing.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {LoginComponent} from 'src/app/auth/components/login/login.component'
import {AuthComponent} from './components/auth/auth.component'
import {StoreModule} from '@ngrx/store'
import {authReducer} from 'src/app/auth/store/reducers'
import {AuthService} from 'src/app/auth/services/auth.service'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from 'src/app/auth/store/effects/register.effect'
import {BackendErrorsModule} from 'src/app/shared/modules/backend-errors/backend-errors.module'
import {PersistanceService} from 'src/app/shared/services/persistance.service'

@NgModule({
  declarations: [RegisterComponent, LoginComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BackendErrorsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
