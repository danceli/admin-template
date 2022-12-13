import { lazy } from 'react';

import { RouteObject } from '../../types';
import LazyLoad from '../../utils/lazyLoad';
import Layout from '../../../views/Layout';

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/menu/menu1',
        element: LazyLoad(lazy(() => import('../../../views/Menu/Menu1/index')))
      },
      {
        path: '/menu/menu21/menu211',
        element: LazyLoad(
          lazy(
            () => import('../../../views/Menu/Menu2/Menu2-1/Menu2-1-1/index')
          )
        )
      },
      {
        path: '/menu/menu21/menu212',
        element: LazyLoad(
          lazy(
            () => import('../../../views/Menu/Menu2/Menu2-1/Menu2-1-2/index')
          )
        )
      },
      {
        path: '/menu/menu22',
        element: LazyLoad(
          lazy(() => import('../../../views/Menu/Menu2/Menu2-2/index'))
        )
      }
    ]
  }
];

export default routes;
