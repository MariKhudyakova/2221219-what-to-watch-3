import { Helmet } from 'react-helmet-async';
import MoviesList from '../../components/films-list/films-list.tsx';
import Logo from '../../components/logo/logo.tsx';
import Footer from '../../components/footer/footer.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import { useAppSelector } from '../../hooks/app-hooks.ts';
import { getMyList } from '../../redux/films-slice/selectors.ts';

function MyListPage() {
  const films = useAppSelector(getMyList);
  const TITLE = 'WTW. My list of movies';

  return (
    <div className="user-page">
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>

      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
