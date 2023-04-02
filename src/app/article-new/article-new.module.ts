import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ArticleNewRoutingModule} from './article-new-routing.module'
import {ArticleNewComponent} from './components/article-new/article-new.component'
import {ArticleFormModule} from 'src/app/shared/modules/article-form/article-form.module'

@NgModule({
  declarations: [ArticleNewComponent],
  imports: [CommonModule, ArticleNewRoutingModule, ArticleFormModule],
})
export class ArticleNewModule {}
