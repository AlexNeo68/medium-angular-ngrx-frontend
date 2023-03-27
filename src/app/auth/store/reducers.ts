import {createReducer, on} from '@ngrx/store'
import {
  getCurrentUserAction,
  getCurrentUserActionSuccess,
} from 'src/app/auth/store/actions/get-current-user.action'
import {
  loginAction,
  loginActionSuccess,
  loginActionFailure,
} from 'src/app/auth/store/actions/login.action'
import {
  registerAction,
  registerActionFailure,
  registerActionSuccess,
} from 'src/app/auth/store/actions/register.action'

import {AuthStateInterface} from 'src/app/auth/types/auth-state.interface'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
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
  })),
  on(loginAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(loginActionSuccess, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(loginActionFailure, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),

  on(getCurrentUserAction, (state: AuthStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserActionSuccess, (state: AuthStateInterface, action) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(loginActionFailure, (state: AuthStateInterface) => ({
    ...state,
    isLoading: false,
  }))
)
