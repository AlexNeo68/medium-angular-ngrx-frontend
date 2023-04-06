import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/auth/store/action-types'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'
import {CurrentUserInputInterface} from 'src/app/shared/types/current-user-input.interface'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{currentUserInput: CurrentUserInputInterface}>()
)

export const updateCurrentUserActionSuccess = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const updateCurrentUserActionFailure = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
