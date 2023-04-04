import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ArticleEditComponent } from 'src/app/article-edit/components/article-edit/article-edit.component'

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: ArticleEditComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleEditRoutingModule { }
