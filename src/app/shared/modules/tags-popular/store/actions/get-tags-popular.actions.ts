import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/shared/modules/tags-popular/store/actionTypes'
import {PopularTag} from 'src/app/shared/types/popular-tag.type'

export const getTagsPopularAction = createAction(ActionTypes.GET_TAGS_POPULAR)

export const getTagsPopularSuccessAction = createAction(
  ActionTypes.GET_TAGS_POPULAR_SUCCESS,
  props<{tagsPopular: PopularTag[]}>()
)

export const getTagsPopularFailureAction = createAction(
  ActionTypes.GET_TAGS_POPULAR_FAILURE
)
