import React from 'react';
import { routeConstants } from 'shared/constants';
const Home = React.lazy(() => import('./'));

const HomeRoute = {
  path: routeConstants.HOME.route,
  component: Home,
};

export default HomeRoute;
