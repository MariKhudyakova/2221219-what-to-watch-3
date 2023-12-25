import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions.ts';
import { ImageUrl } from '../../types/index.ts';
import { AuthorizationStatus } from '../../const.ts';

type userSliceProps = {
  authorizationStatus: AuthorizationStatus;
  userImage: ImageUrl;
};

const initialState: userSliceProps = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userImage: '',
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action: PayloadAction<ImageUrl>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userImage = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action: PayloadAction<ImageUrl>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userImage = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const { reducer: userReducer } = userSlice;
