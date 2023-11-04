import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { SmallFilmCardProps } from '../../components/small-film-card/small-film-card';
import { Helmet } from 'react-helmet-async';

type MyListScreenProps = {
  smallFilmCards: SmallFilmCardProps[];
}

export default function MyListScreen({smallFilmCards}: MyListScreenProps): JSX.Element {
  return(
    <div className="user-page">
      <Helmet>
        <title>WTW. My list</title>
      </Helmet>

      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {smallFilmCards.map((smallFilmCard: SmallFilmCardProps) => (
            <SmallFilmCard
              key={smallFilmCard.id}
              imgSrc={smallFilmCard.imgSrc}
              title={smallFilmCard.title}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
