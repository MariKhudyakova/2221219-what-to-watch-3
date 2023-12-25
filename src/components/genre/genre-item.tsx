import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks.ts';
import { Genre } from '../../types/index.ts';
import { getActiveGenre } from '../../redux/films-slice/selectors.ts';
import { setActiveGenre } from '../../redux/films-slice/films-slice.ts';

type GenreItemProps = {
  genre: Genre;
};

export default function GenreItem({ genre }: GenreItemProps) {
  const activeGenre = useAppSelector(getActiveGenre);
  const dispatch = useAppDispatch();

  const handleGenreClick = () => {
    dispatch(setActiveGenre(genre));
  };

  return (
    <li
      className={`catalog__genres-item ${
        genre === activeGenre ? 'catalog__genres-item--active' : ''
      }`}
      onClick={handleGenreClick}
    >
      <a className="catalog__genres-link" id={genre}>
        {genre}
      </a>
    </li>
  );
}
