import React from 'react';
import { Route } from 'react-router-dom';

import ROUTES from './routes';

export const Routes = () => (
  <Route exact={ true } path={ ROUTES.PUBLIC.ROOT } component={ Login } />
);
