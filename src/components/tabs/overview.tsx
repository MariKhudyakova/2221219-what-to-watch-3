import { getFilmGrade, getFormattedRating } from '../../utils/get-films.ts';
import { FilmCardType } from '../../types/film-types.ts';

type OverviewProps = {
  filmCard: FilmCardType;
};

export default function Overview({ filmCard }: OverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {getFormattedRating(filmCard.rating)}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getFilmGrade(filmCard.rating)}
          </span>
          <span className="film-rating__count">
            {filmCard.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        {filmCard.description}
        <p className="film-card__director">
          <strong>Director: {filmCard.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {`${filmCard.starring.join(', ')} `}
            and other
          </strong>
        </p>
      </div>
    </>
  );
}
