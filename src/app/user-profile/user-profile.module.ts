import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {UserProfileRoutingModule} from './user-profile-routing.module'
import {UserProfileComponent} from './components/user-profile/user-profile.component'
import {StoreModule} from '@ngrx/store'
import {UserProfileReducer} from 'src/app/user-profile/store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {UserProfileEffect} from 'src/app/user-profile/store/effects/get-profile.effect'
import {UserProfileService} from 'src/app/user-profile/services/user-profile.service'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {ErrorMessageModule} from 'src/app/shared/modules/error-message/error-message.module'

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    StoreModule.forFeature('userProfile', UserProfileReducer),
    EffectsModule.forFeature([UserProfileEffect]),
    LoadingModule,
    ErrorMessageModule,
  ],
  providers: [UserProfileService],
})
export class UserProfileModule {}
