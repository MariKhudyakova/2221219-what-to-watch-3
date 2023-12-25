import { useState } from 'react';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import MovieCard from './film-card.tsx';
import { FilmType } from '../../types/film-types.ts';
import { SHOW_INTRO_DELAY } from '../../const.ts';

type MoviesListProps = {
  films: FilmType[];
  filmsCount?: number;
};

export default function MoviesList({ films, filmsCount }: MoviesListProps) {
  const [activeFilm, setActiveFilm] = useState<string | null>(null);
  let timer: undefined | TimeoutId = undefined;
  const handleFilmFocus = (id: string) => {
    timer = setTimeout(() => {
      setActiveFilm(id);
    }, SHOW_INTRO_DELAY);
  };

  const handleFilmOut = () => {
    clearTimeout(timer);
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount || films.length).map((film) => (
        <MovieCard film={film} onMouseOver={handleFilmFocus} onMouseOut={handleFilmOut} activeFilm={activeFilm} key={film.id} />
      ))}
    </div>
  );
}
