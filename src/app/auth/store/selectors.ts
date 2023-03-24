import {createSelector} from '@ngrx/store'
import {AuthStateInterface} from 'src/app/auth/types/auth-state.interface'
import {AppStateInterface} from 'src/app/shared/types/app-state.interface'

export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth

export const authIsSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting
)

export const authValidationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.validationErrors
)
