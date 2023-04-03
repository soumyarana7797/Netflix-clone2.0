import React from 'react';
import { routeConstants } from 'shared/constants';
const Dashboard = React.lazy(() => import('./'));

const DashboardRoute = {
  path: routeConstants.DASHBOARD.route,
  component: Dashboard,
  exact: routeConstants.DASHBOARD.exact,
};

export default DashboardRoute;
