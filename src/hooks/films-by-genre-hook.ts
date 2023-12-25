import { useAppSelector } from './app-hooks.ts';
import { ALL_GENRES } from '../const.ts';
import { getActiveGenre, getFilms } from '../redux/films-slice/selectors.ts';

export const useFilmsByGenre = () =>
  useAppSelector((state) => {
    const films = getFilms(state);
    const activeGenre = getActiveGenre(state);

    if (activeGenre === ALL_GENRES) {
      return films;
    }
    return films.filter((film) => film.genre === state.Films.activeGenre);
  });
