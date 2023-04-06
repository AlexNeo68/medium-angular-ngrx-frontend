import {createReducer, on} from '@ngrx/store'
import {
  updateCurrentUserAction,
  updateCurrentUserActionFailure,
  updateCurrentUserActionSuccess,
} from 'src/app/auth/store/actions/update-current-user.action'
import {AuthStateInterface} from 'src/app/auth/types/auth-state.interface'
import {SettingsStateInterface} from 'src/app/settings/types/settings-state.interface'

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

export const settingsReducer = createReducer(
  initialState,
  on(updateCurrentUserAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(updateCurrentUserActionSuccess, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
  on(updateCurrentUserActionFailure, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
)
