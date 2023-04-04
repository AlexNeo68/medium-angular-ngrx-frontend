import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ArticleEditRoutingModule } from './article-edit-routing.module'
import { ArticleEditComponent } from './components/article-edit/article-edit.component'
import { ArticleFormModule } from 'src/app/shared/modules/article-form/article-form.module'
import { StoreModule } from '@ngrx/store'

import { EffectsModule } from '@ngrx/effects'
import { updateArticleReducer } from 'src/app/article-edit/store/reducers'
import { UpdateArticleEffects } from 'src/app/article-edit/store/effects/update-article.effects'
import { ArticleUpdateService } from 'src/app/article-edit/services/article-update.service'
import { ArticleService as ArticleServiceShared } from 'src/app/shared/services/article.service'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { GetArticleEffects } from 'src/app/article-edit/store/effects/get-article.effects'


@NgModule({
  declarations: [ArticleEditComponent],
  imports: [
    CommonModule,
    ArticleEditRoutingModule,
    ArticleFormModule,
    StoreModule.forFeature('updateArticle', updateArticleReducer),
    EffectsModule.forFeature([GetArticleEffects, UpdateArticleEffects]),
    LoadingModule
  ],
  providers: [ArticleUpdateService, ArticleServiceShared],
})
export class ArticleEditModule { }
