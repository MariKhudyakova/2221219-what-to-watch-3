import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewForm from '../../components/review-form/review-form.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks.ts';
import { fetchFilmDataAction } from '../../redux/api-actions.ts';
import { getFilmCard } from '../../redux/films-slice/selectors.ts';

function AddReviewPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const filmCard = useAppSelector(getFilmCard);

  useEffect(() => {
    if (id && id !== filmCard?.id) {
      dispatch(fetchFilmDataAction(id));
    }
  }, [dispatch, filmCard?.id, id]);

  if (!filmCard) {
    return null;
  }

  const TITLE = 'WTW. Add review';

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmCard.backgroundImage} alt={filmCard.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/film/${filmCard.id}`} className="breadcrumbs__link">
                  {filmCard.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={filmCard.posterImage}
            alt={filmCard.name}
            width="218"
            height="327"
          />
        </div>
      </div>
      <ReviewForm id={filmCard.id} />
    </section>
  );
}

export default AddReviewPage;
