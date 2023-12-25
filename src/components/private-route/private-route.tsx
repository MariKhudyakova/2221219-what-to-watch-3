import { Navigate } from 'react-router-dom';
import React from 'react';
import { AppRoute } from '../../const.ts';
import { useAppSelector } from '../../hooks/app-hooks.ts';
import { getAuthorized } from '../../redux/user-slice/selectors.ts';

type PrivateRouteProps = {
  children: React.ReactElement;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authorized = useAppSelector(getAuthorized);
  return authorized ? children : <Navigate to={AppRoute.SignIn} />;
};

export default PrivateRoute;
