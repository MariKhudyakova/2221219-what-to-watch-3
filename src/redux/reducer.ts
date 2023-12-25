import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user-slice/user-slice.ts';
import { filmsSlice } from './films-slice/films-slice.ts';

export const reducer = combineReducers({
  User: userSlice.reducer,
  Films: filmsSlice.reducer,
});
