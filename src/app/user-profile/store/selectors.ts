import {createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/app-state.interface'
import {UserProfileStateInterface} from 'src/app/user-profile/types/user-profile-state.interface'

export const userProfileFeatureSelector = (state: AppStateInterface) =>
  state.userProfile

export const isLoadingUserProfileSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileStateInterface) => state.isLoading
)

export const dataUserProfileSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileStateInterface) => state.data
)

export const errorsUserProfileSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileStateInterface) => state.error
)
