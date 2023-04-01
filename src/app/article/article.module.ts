import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ArticleRoutingModule} from './article-routing.module'
import {ArticleComponent} from './components/article/article.component'
import {EffectsModule} from '@ngrx/effects'
import {GetArticleEffect} from 'src/app/article/store/effects/get-article.effect'
import {StoreModule} from '@ngrx/store'
import {ArticleReducer} from 'src/app/article/store/reducers'
import {ArticleService as ArticleServiceShared} from 'src/app/shared/services/article.service'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {ErrorMessageModule} from 'src/app/shared/modules/error-message/error-message.module'
import {TagListModule} from 'src/app/shared/modules/tag-list/tag-list.module'

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    StoreModule.forFeature('article', ArticleReducer),
    EffectsModule.forFeature([GetArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  providers: [ArticleServiceShared],
})
export class ArticleModule {}
