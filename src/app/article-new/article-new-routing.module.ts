import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ArticleNewComponent} from 'src/app/article-new/components/article-new/article-new.component'

const routes: Routes = [
  {
    path: 'articles/new',
    component: ArticleNewComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleNewRoutingModule {}
