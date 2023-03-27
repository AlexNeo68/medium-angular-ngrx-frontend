import {createReducer, on} from '@ngrx/store'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions/get-feed.actions'
import {FeedStateInterface} from 'src/app/shared/modules/feed/types/feed-state.interface'

const initialState: FeedStateInterface = {
  isLoading: false,
  data: null,
  error: null,
}

export const reducer = createReducer(
  initialState,
  on(getFeedAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getFeedSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.feed,
  })),
  on(getFeedFailureAction, (state) => ({
    ...state,
    isLoading: false,
  }))
)
