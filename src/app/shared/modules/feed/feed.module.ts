import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedComponent} from './components/feed/feed.component'
import {FeedService} from 'src/app/shared/modules/feed/services/feed.service'
import {EffectsModule} from '@ngrx/effects'
import {GetFeedEffect} from 'src/app/shared/modules/feed/store/effects/get-feed.effects'
import {StoreModule} from '@ngrx/store'
import {reducer} from 'src/app/shared/modules/feed/store/reducers'
import {RouterModule} from '@angular/router'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {ErrorMessageModule} from 'src/app/shared/modules/error-message/error-message.module'
import {PaginationModule} from 'src/app/shared/modules/pagination/pagination.module'
import {TagListModule} from 'src/app/shared/modules/tag-list/tag-list.module'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducer),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
    PaginationModule,
    TagListModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
