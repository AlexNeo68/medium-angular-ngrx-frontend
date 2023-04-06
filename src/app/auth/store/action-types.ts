export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register SUCCESS',
  REGISTER_FAILURE = '[Auth] Register FAILURE',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login SUCCESS',
  LOGIN_FAILURE = '[Auth] Login FAILURE',

  GET_CURRENT_USER = '[Auth] Get Current User',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User SUCCESS',
  GET_CURRENT_USER_FAILURE = '[Auth] Get Current User FAILURE',

  UPDATE_CURRENT_USER = '[Auth] Update Current User',
  UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update Current User SUCCESS',
  UPDATE_CURRENT_USER_FAILURE = '[Auth] Update Current User FAILURE',

  LOGOUT = '[Auth] Logout',
}
