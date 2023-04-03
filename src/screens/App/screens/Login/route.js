import React from 'react';
import { routeConstants } from 'shared/constants';
const Login = React.lazy(() => import('./'));

const LoginRoute = {
  path: routeConstants.LOGIN.route,
  component: Login,
  exact: routeConstants.LOGIN.exact,
};

export default LoginRoute;
