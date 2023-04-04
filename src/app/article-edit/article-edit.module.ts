import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ArticleEditRoutingModule } from './article-edit-routing.module'
import { ArticleEditComponent } from './components/article-edit/article-edit.component'
import { ArticleFormModule } from 'src/app/shared/modules/article-form/article-form.module'
import { StoreModule } from '@ngrx/store'
import { createArticleReducer } from 'src/app/article-edit/store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { CreateArticleEffects } from 'src/app/article-edit/store/effects/create-article.effects'
import { ArticleEditService } from 'src/app/article-edit/services/article-edit.service'

@NgModule({
  declarations: [ArticleEditComponent],
  imports: [
    CommonModule,
    ArticleEditRoutingModule,
    ArticleFormModule,
    StoreModule.forFeature('createArticle', createArticleReducer),
    EffectsModule.forFeature([CreateArticleEffects]),
  ],
  providers: [ArticleEditService],
})
export class ArticleEditModule { }
