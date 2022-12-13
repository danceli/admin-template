import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from '../types';
import home from './home';
import menu from './menu';

import Login from '../../views/Login';
import NotFound from '../../views/NotFound';

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/login',
    element: <Login />
  },
  ...home,
  ...menu,
  {
    path: '*',
    element: <NotFound />
  }
];

export default () => useRoutes(routeList);
