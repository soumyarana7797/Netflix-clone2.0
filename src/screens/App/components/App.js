import React, { useState, useEffect } from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import './App.css';

import routes from '../route';
import routeList from 'shared/constants/routes';
import { LazyLoader, RouteWithSubRoutes } from 'shared/components';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        element={<Navigate replace to={routeList.HOME.route} />}
      />
      {routes.map((route, i) => (
        <Route
          path={route.path}
          key={route.path}
          element={<route.component />}
        />
      ))}
    </Switch>
  );
}

export default App;
