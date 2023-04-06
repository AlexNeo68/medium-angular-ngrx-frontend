import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SettingsRoutingModule} from './settings-routing.module'
import {SettingsComponent} from './components/settings/settings.component'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {BackendErrorsModule} from 'src/app/shared/modules/backend-errors/backend-errors.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {settingsReducer} from 'src/app/settings/store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {logoutEffect} from 'src/app/auth/store/effects/logout.effect'

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    LoadingModule,
    BackendErrorsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('settings', settingsReducer),
    EffectsModule.forFeature([logoutEffect]),
  ],
})
export class SettingsModule {}
