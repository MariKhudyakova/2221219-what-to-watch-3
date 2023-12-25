import MainPage from '../../pages/main/main-page.tsx';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import SignInPage from '../../pages/sign-in/sign-in-page.tsx';
import PlayerPage from '../../pages/player/player-page.tsx';
import MoviePage from '../../pages/film/film-page.tsx';
import AddReviewPage from '../../pages/add-review/add-review-page.tsx';
import NotFoundPage from '../../pages/not-found/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import MyListPage from '../../pages/my-list/my-list-page.tsx';
import { HelmetProvider } from 'react-helmet-async';
import browserHistory from '../../browser-history.ts';
import HistoryRouter from '../history-route/history-route';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks.ts';
import { getHasError, getIsDataLoading } from '../../redux/films-slice/selectors.ts';
import Spinner from '../spinner/spinner.tsx';
import { useEffect } from 'react';
import { getAuthorized } from '../../redux/user-slice/selectors.ts';
import { fetchMyList } from '../../redux/api-actions.ts';

export default function App() {
  const hasError = useAppSelector(getHasError);
  const isDataLoading = useAppSelector(getIsDataLoading);
  const dispatch = useAppDispatch();
  const authorized = useAppSelector(getAuthorized);

  useEffect(() => {
    if (authorized) {
      dispatch(fetchMyList());
    }
  }, [authorized, dispatch]);

  if (isDataLoading) {
    return <Spinner />;
  }

  if (hasError) {
    return <NotFoundPage />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInPage />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerPage />}
          />
          <Route
            path={AppRoute.Film}
            element={<MoviePage />}
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute>
                <AddReviewPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
