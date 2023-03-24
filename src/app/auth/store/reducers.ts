import {createReducer, on} from '@ngrx/store'
import {
  registerAction,
  registerActionFailure,
  registerActionSuccess,
} from 'src/app/auth/store/actions/register.action'

import {AuthStateInterface} from 'src/app/auth/types/auth-state.interface'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  validationErrors: null,
}

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerActionSuccess, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(registerActionFailure, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
)
