import { useAppDispatch, useAppSelector } from '../../../hooks/app-hooks.ts';
import { setFilmStatus } from '../../../redux/api-actions.ts';
import { FilmStatus } from '../../../const.ts';
import { getMyList } from '../../../redux/films-slice/selectors.ts';

type AddToMyListButtonProps = {
  filmId: string;
};

export default function AddToMyListButton({ filmId }: AddToMyListButtonProps) {
  const myFilms = useAppSelector(getMyList);
  const dispatch = useAppDispatch();

  const handleAddButtonClick = () => {
    dispatch(setFilmStatus({ id: filmId, filmStatus: FilmStatus.ToView }));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleAddButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add" /></svg>
      <span>My list</span>
      <span className="film-card__count">{myFilms.length}</span>
    </button>
  );
}
