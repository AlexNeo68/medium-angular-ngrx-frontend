import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  isLoggedIn: boolean | null
  currentUser: CurrentUserInterface | null
  validationErrors: BackendErrorsInterface | null
}
