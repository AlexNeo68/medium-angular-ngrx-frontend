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


@NgModule({
  declarations: [ArticleEditComponent],
  imports: [
    CommonModule,
    ArticleEditRoutingModule,
    ArticleFormModule,
    StoreModule.forFeature('updateArticle', updateArticleReducer),
    EffectsModule.forFeature([UpdateArticleEffects]),
  ],
  providers: [ArticleUpdateService],
})
export class ArticleEditModule { }
