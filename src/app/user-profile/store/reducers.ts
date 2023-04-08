import {createReducer, on} from '@ngrx/store'
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from 'src/app/user-profile/store/actions/get-profile.actions'
import {UserProfileStateInterface} from 'src/app/user-profile/types/user-profile-state.interface'
const initialState: UserProfileStateInterface = {
  isLoading: false,
  data: null,
  error: null,
}
export const UserProfileReducer = createReducer(
  initialState,
  on(getUserProfileAction, (state: UserProfileStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(
    getUserProfileSuccessAction,
    (state: UserProfileStateInterface, action) => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(getUserProfileFailureAction, (state: UserProfileStateInterface) => ({
    ...state,
    isLoading: false,
  }))
)
