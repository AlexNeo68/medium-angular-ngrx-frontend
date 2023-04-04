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

export const isLoadingUpdateArticleSelector = createSelector(
  updateArticleFeatureSelector,
  (state: UpdateArticleStateInterface) => state.isLoading
)

export const articleUpdateArticleSelector = createSelector(
  updateArticleFeatureSelector,
  (state: UpdateArticleStateInterface) => state.article
)
