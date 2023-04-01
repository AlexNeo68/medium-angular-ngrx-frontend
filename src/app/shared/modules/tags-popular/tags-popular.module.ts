import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagsPopularComponent} from './components/tags-popular/tags-popular.component'
import {EffectsModule} from '@ngrx/effects'
import {GetTagPopularEffect} from 'src/app/shared/modules/tags-popular/store/effects/get-tags-popular.effects'
import {StoreModule} from '@ngrx/store'
import {tagsPopularReducer} from 'src/app/shared/modules/tags-popular/store/reducers'
import {TagsPopularService} from 'src/app/shared/modules/tags-popular/services/tags-popular.service'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {ErrorMessageModule} from 'src/app/shared/modules/error-message/error-message.module'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [TagsPopularComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetTagPopularEffect]),
    StoreModule.forFeature('tagsPopular', tagsPopularReducer),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
  ],
  exports: [TagsPopularComponent],
  providers: [TagsPopularService],
})
export class TagsPopularModule {}
