import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ImageUrl, AppDispatch, State, UserFormValues } from '../types/index.ts';
import { ApiRoute, FilmStatus } from '../const.ts';
import { AuthInfoType } from '../types/auth-info-type.ts';
import { CommentType } from '../types/comment-type.ts';
import { FilmCardType, FilmType } from '../types/film-types.ts';
import { PromoFilmType } from '../types/promo-film-type.ts';
import { removeToken, saveToken } from '../services/token.ts';

export const checkAuthAction = createAsyncThunk<
  ImageUrl,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuthorization', async (_arg, { extra: api }) => {
  const { data } = await api.get<AuthInfoType>(ApiRoute.Login());
  return data.avatarUrl;
});

export const fetchFilmsAction = createAsyncThunk<
  FilmType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { extra: api }) => {
  const { data } = await api.get<FilmType[]>(ApiRoute.Films());
  return data;
});

export const fetchPromoFilmAction = createAsyncThunk<
  PromoFilmType,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, { extra: api }) => {
  const { data } = await api.get<PromoFilmType>(ApiRoute.Promo());
  return data;
});

export const fetchFilmDataAction = createAsyncThunk<
  { filmCard: FilmCardType; comments: CommentType[]; moreLikeThis: FilmType[] },
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilmData', async (id, { extra: api }) => {
  const { data: filmCard } = await api.get<FilmCardType>(ApiRoute.Film(id));
  const { data: comments } = await api.get<CommentType[]>(ApiRoute.Comments(id));
  const { data: moreLikeThis } = await api.get<FilmType[]>(ApiRoute.Similar(id));
  return { filmCard, comments, moreLikeThis };
});

export const loginAction = createAsyncThunk<
  ImageUrl,
  UserFormValues,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async (form, { extra: api }) => {
  const { data } = await api.post<AuthInfoType>(ApiRoute.Login(), form);
  saveToken(data.token);
  return data.avatarUrl;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(ApiRoute.Logout());
  removeToken();
});

export const sendComment = createAsyncThunk<
  CommentType,
  { id: string; rating: number; comment: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/sendComment', async ({ id, rating, comment }, { extra: api }) => {
  const { data } = await api.post<CommentType>(ApiRoute.Comments(id), {
    rating: rating,
    comment: comment,
  });
  return data;
});

export const fetchMyList = createAsyncThunk<
  FilmType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchMyList', async (_arg, { extra: api }) => {
  const { data } = await api.get<FilmType[]>(ApiRoute.Favorite());
  return data;
});

export const setFilmStatus = createAsyncThunk<
  FilmCardType,
  { id: string; filmStatus: FilmStatus },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/setFilmStatus', async ({ id, filmStatus }, { extra: api }) => {
  const { data } = await api.post<FilmCardType>(
    ApiRoute.SetFilmStatus(id, filmStatus),
  );
  return data;
});
