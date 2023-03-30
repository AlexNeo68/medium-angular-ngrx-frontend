import {createReducer, on} from '@ngrx/store'
import {
  getTagsPopularAction,
  getTagsPopularFailureAction,
  getTagsPopularSuccessAction,
} from 'src/app/shared/modules/tags-popular/store/actions/get-tags-popular.actions'
import {TagsPopularStateInterface} from 'src/app/shared/modules/tags-popular/types/tags-popular-state.interface'
const initialState: TagsPopularStateInterface = {
  isLoading: false,
  data: null,
  error: null,
}
export const tagsPopularReducer = createReducer(
  initialState,
  on(getTagsPopularAction, (state: TagsPopularStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(
    getTagsPopularSuccessAction,
    (state: TagsPopularStateInterface, action) => ({
      ...state,
      isLoading: false,
      data: action.tagsPopular,
    })
  ),
  on(getTagsPopularFailureAction, (state: TagsPopularStateInterface) => ({
    ...state,
    isLoading: false,
  }))
)
