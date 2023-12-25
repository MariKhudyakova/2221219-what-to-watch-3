import { store } from '../redux/store.ts';

export type ImageUrl = string;
export type Genre = string;
export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
export type UserFormValues = {
  email: string;
  password: string;
};
