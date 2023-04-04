import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ArticleNewRoutingModule} from './article-new-routing.module'
import {ArticleNewComponent} from './components/article-new/article-new.component'
import {ArticleFormModule} from 'src/app/shared/modules/article-form/article-form.module'
import {StoreModule} from '@ngrx/store'
import {createArticleReducer} from 'src/app/article-new/store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {CreateArticleEffects} from 'src/app/article-new/store/effects/create-article.effects'
import {ArticleNewService} from 'src/app/article-new/services/article-new.service'

@NgModule({
  declarations: [ArticleNewComponent],
  imports: [
    CommonModule,
    ArticleNewRoutingModule,
    ArticleFormModule,
    StoreModule.forFeature('createArticle', createArticleReducer),
    EffectsModule.forFeature([CreateArticleEffects]),
  ],
  providers: [ArticleNewService],
})
export class ArticleNewModule {}
