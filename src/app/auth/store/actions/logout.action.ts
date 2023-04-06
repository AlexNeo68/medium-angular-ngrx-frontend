import {createAction} from '@ngrx/store'
import {ActionTypes} from 'src/app/auth/store/action-types'

export const logoutAction = createAction(ActionTypes.LOGOUT)
