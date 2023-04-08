import {createAction, props} from '@ngrx/store'
import {ProfileInterface} from 'src/app/shared/types/profile.interface'
import {UserProfileActionTypes} from 'src/app/user-profile/store/action-types'

export const getUserProfileAction = createAction(
  UserProfileActionTypes.GET_PROFILE,
  props<{slug: string}>()
)
export const getUserProfileSuccessAction = createAction(
  UserProfileActionTypes.GET_PROFILE_SUCCESS,
  props<{userProfile: ProfileInterface}>()
)
export const getUserProfileFailureAction = createAction(
  UserProfileActionTypes.GET_PROFILE_FAILURE
)
