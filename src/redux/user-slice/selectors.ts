import { ImageUrl, State } from '../../types/index.ts';
import { AuthorizationStatus } from '../../const.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state.User.authorizationStatus;
export const getAuthorized = (state: State): boolean => state.User.authorizationStatus === AuthorizationStatus.Auth;
export const getUserImage = (state: State): ImageUrl => state.User.userImage;
