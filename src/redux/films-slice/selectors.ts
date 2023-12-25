import { Genre, State } from '../../types/index.ts';
import { PromoFilmType } from '../../types/promo-film-type.ts';
import { CommentType } from '../../types/comment-type.ts';
import { FilmCardType, FilmType } from '../../types/film-types.ts';

export const getFilms = (state: State): FilmType[] => state.Films.films;
export const getPromoFilm = (state: State): PromoFilmType | null => state.Films.promoFilm;
export const getFilmCard = (state: State): FilmCardType | null => state.Films.filmCard;
export const getMoreLikeThis = (state: State): FilmType[] => state.Films.moreLikeThis;
export const getComments = (state: State): CommentType[] => state.Films.comments;
export const getMyList = (state: State): FilmType[] => state.Films.myList;
export const getGenres = (state: State): Genre[] => state.Films.genres;
export const getActiveGenre = (state: State): Genre => state.Films.activeGenre;
export const getHasError = (state: State): boolean => state.Films.hasError;
export const getIsDataLoading = (state: State): boolean => state.Films.isDataLoading;
