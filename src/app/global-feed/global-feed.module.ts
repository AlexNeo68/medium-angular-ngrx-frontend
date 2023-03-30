import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {GlobalFeedRoutingModule} from './global-feed-routing.module'
import {GlobalFeedComponent} from './components/global-feed/global-feed.component'
import {FeedModule} from 'src/app/shared/modules/feed/feed.module'
import {BannerModule} from 'src/app/shared/modules/banner/banner.module'
import {TagsPopularModule} from 'src/app/shared/modules/tags-popular/tags-popular.module'

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    GlobalFeedRoutingModule,
    FeedModule,
    BannerModule,
    TagsPopularModule,
  ],
})
export class GlobalFeedModule {}
