import { useAppSelector } from '../../hooks/app-hooks.ts';
import GenreItem from './genre-item.tsx';
import { getGenres } from '../../redux/films-slice/selectors.ts';

export default function GenresList() {
  const genres = useAppSelector(getGenres);

  return (
    <ul className="catalog__genres-list">
      {Array.from(genres).map((genre) => (
        <GenreItem genre={genre} key={genre} />
      ))}
    </ul>
  );
}
