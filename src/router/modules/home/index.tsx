import { RouteObject } from '../../types';

import Layout from '../../../views/Layout';
import Home from '../../../views/Home';

const homeRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
];

export default homeRoutes;
