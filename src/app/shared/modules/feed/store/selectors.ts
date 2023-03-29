import {createSelector} from '@ngrx/store'
import {FeedStateInterface} from 'src/app/shared/modules/feed/types/feed-state.interface'
import {AppStateInterface} from 'src/app/shared/types/app-state.interface'

export const feedFeatureSelector = (state: AppStateInterface) => state.feed

export const feedIsLoadingSelector = createSelector(
  feedFeatureSelector,
  (state: FeedStateInterface) => state.isLoading
)

export const feedDataSelector = createSelector(
  feedFeatureSelector,
  (state: FeedStateInterface) => state.data
)

export const feedErrorSelector = createSelector(
  feedFeatureSelector,
  (state: FeedStateInterface) => state.error
)
