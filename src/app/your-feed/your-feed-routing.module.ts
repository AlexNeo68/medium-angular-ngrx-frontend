import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {YourFeedComponent} from 'src/app/your-feed/components/your-feed/your-feed.component'

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourFeedRoutingModule {}
