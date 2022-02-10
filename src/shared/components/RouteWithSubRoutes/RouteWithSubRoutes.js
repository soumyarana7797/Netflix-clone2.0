import React from 'react';
import { Route, Navigate } from 'react-router-dom';
// import localStorageService from 'services';
import { routeConstants } from 'shared/constants';

function RouteWithSubRoutes(route) {
  //   const userData = localStorageService.getUser();
  const userData = [];
  return (
    <Route
      path={route.path}
      exact={!!route.exact}
      render={(props) => {
        if (route.protected) {
          if (userData) {
            return (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            );
          } else {
            return (
              <Navigate
                to={{
                  pathname: routeConstants.AUTH.subRoutes.LOGIN.route,
                  state: { from: props.location },
                }}
              />
            );
          }
        } else if (route.protected === false) {
          if (!userData) {
            return (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            );
          } else {
            return <Navigate to={routeConstants.HOME.route} />;
          }
        } else {
          return (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
          );
        }
      }}
    />
  );
}

export default RouteWithSubRoutes;
