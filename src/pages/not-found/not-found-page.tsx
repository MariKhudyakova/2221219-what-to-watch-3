import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import Footer from '../../components/footer/footer.tsx';
import './not-found.css';

function ErrorScreen() {
  const TITLE = 'WTW. 404 Not Found';

  return (
    <div className="page-content page-content-not-found">
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>

      <h1 className='error-h1'>404 Not Found</h1>
      <p className="zoom-area">Oops. Looks like you took a wrong turn.</p>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <Link to={AppRoute.Main}>
          <button className="replay replay--error more-link">return to the homepage</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorScreen;
