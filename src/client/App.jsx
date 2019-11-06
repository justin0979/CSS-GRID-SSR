import { hot } from 'react-hot-loader/root';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from '#client/Routes';

const App = () => <div>{renderRoutes(Routes)}</div>;

export default hot(App);
