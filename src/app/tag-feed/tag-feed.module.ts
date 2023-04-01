import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {TagFeedRoutingModule} from './tag-feed-routing.module'
import {TagFeedComponent} from './components/tag-feed/tag-feed.component'
import {BannerModule} from 'src/app/shared/modules/banner/banner.module'
import {TagsPopularModule} from 'src/app/shared/modules/tags-popular/tags-popular.module'
import {FeedModule} from 'src/app/shared/modules/feed/feed.module'
import {FeedTogglerModule} from 'src/app/shared/modules/feed-toggler/feed-toggler.module'

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    TagFeedRoutingModule,
    BannerModule,
    TagsPopularModule,
    FeedModule,
    FeedTogglerModule,
  ],
})
export class TagFeedModule {}
