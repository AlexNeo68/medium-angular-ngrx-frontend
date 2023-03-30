import {createSelector} from '@ngrx/store'
import {TagsPopularStateInterface} from 'src/app/shared/modules/tags-popular/types/tags-popular-state.interface'
import {AppStateInterface} from 'src/app/shared/types/app-state.interface'

export const getTagsPopularFeatureSelector = (state: AppStateInterface) =>
  state.tagsPopular

export const getTagsPopularIsLoadingSelector = createSelector(
  getTagsPopularFeatureSelector,
  (state: TagsPopularStateInterface) => state.isLoading
)

export const getTagsPopularDataSelector = createSelector(
  getTagsPopularFeatureSelector,
  (state: TagsPopularStateInterface) => state.data
)

export const getTagsPopularErrorSelector = createSelector(
  getTagsPopularFeatureSelector,
  (state: TagsPopularStateInterface) => state.error
)
