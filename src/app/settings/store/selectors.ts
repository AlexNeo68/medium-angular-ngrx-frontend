import {createSelector} from '@ngrx/store'
import {SettingsStateInterface} from 'src/app/settings/types/settings-state.interface'
import {AppStateInterface} from 'src/app/shared/types/app-state.interface'

export const settingsFeatureSelector = (state: AppStateInterface) =>
  state.settings

export const isSubmittingSettingsSelector = createSelector(
  settingsFeatureSelector,
  (state: SettingsStateInterface) => state.isSubmitting
)
export const errorsSettingsSelector = createSelector(
  settingsFeatureSelector,
  (state: SettingsStateInterface) => state.validationErrors
)
