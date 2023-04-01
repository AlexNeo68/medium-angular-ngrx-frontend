import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {YourFeedRoutingModule} from './your-feed-routing.module'
import {YourFeedComponent} from './components/your-feed/your-feed.component'
import {BannerModule} from 'src/app/shared/modules/banner/banner.module'
import {FeedTogglerModule} from 'src/app/shared/modules/feed-toggler/feed-toggler.module'
import {FeedModule} from 'src/app/shared/modules/feed/feed.module'
import {TagsPopularModule} from 'src/app/shared/modules/tags-popular/tags-popular.module'

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    YourFeedRoutingModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    TagsPopularModule,
  ],
  exports: [YourFeedComponent],
})
export class YourFeedModule {}
