import AddToMyListButton from './add-to-my-list-button.tsx';
import RemoveToMyListButton from './remove-from-my-list-button.tsx';
import { FilmCardType } from '../../../types/film-types.ts';
import { PromoFilmType } from '../../../types/promo-film-type.ts';

type MyListButtonProps = {
  filmCard: FilmCardType | PromoFilmType;
};

export default function MyListButton({ filmCard }: MyListButtonProps) {
  return filmCard.isFavorite ? (
    <RemoveToMyListButton filmId={filmCard.id} />
  ) : (
    <AddToMyListButton filmId={filmCard.id} />
  );
}
