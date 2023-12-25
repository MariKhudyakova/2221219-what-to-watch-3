import { Genre } from './types/index.ts';

export const SHOW_FILMS_COUNT = 8;
export const MORE_LIKE_FILMS_COUNT = 4;
export const ALL_GENRES: Genre = 'All genres';
export const MAX_GENRES_COUNT = 9;
export const SHOW_INTRO_DELAY = 1000;
export const HOUR_MINUTES_COUNT = 60;
export const TWO_HOUR_MINUTES_COUNT = 3600;
export const CommentLength = {
  MIN: 50,
  MAX: 400,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum FilmStatus {
  Vied = 0,
  ToView = 1,
}

export const ApiRoute = {
  Films: () => '/films',
  Film: (filmId: string) => `/films/${filmId}`,
  Similar: (filmId: string) => `/films/${filmId}/similar`,
  Promo: () => '/promo',
  Favorite: () => '/favorite',
  SetFilmStatus: (filmId: string, status: FilmStatus) =>
    `/favorite/${filmId}/${status}`,
  Comments: (filmId: string) => `/comments/${filmId}`,
  Login: () => '/login',
  Logout: () => '/logout',
};

export const NameSpace = {
  Films: 'Films',
  User: 'User',
};

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}
