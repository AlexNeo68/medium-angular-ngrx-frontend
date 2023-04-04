import { createSelector } from '@ngrx/store'
import { UpdateArticleStateInterface } from 'src/app/article-edit/types/update-article.state.interface'

import { AppStateInterface } from 'src/app/shared/types/app-state.interface'

export const updateArticleFeatureSelector = (state: AppStateInterface) =>
  state.updateArticle

export const isSubmittingUpdateArticleSelector = createSelector(
  updateArticleFeatureSelector,
  (state: UpdateArticleStateInterface) => state.isSubmitting
)

export const errorsUpdateArticleSelector = createSelector(
  updateArticleFeatureSelector,
  (state: UpdateArticleStateInterface) => state.validationErrors
)
