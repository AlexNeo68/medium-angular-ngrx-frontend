import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedComponent} from './components/feed/feed.component'
import {FeedService} from 'src/app/shared/modules/feed/services/feed.service'
import {EffectsModule} from '@ngrx/effects'
import {GetFeedEffect} from 'src/app/shared/modules/feed/store/effects/get-feed.effects'
import {StoreModule} from '@ngrx/store'
import {reducer} from 'src/app/shared/modules/feed/store/reducers'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducer),
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
