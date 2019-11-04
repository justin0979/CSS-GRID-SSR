import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from 'client/App';
import favicon from 'img/favicon';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return `
  <!DOCTYPE html>
  <html lang='en'>
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i'>
      <link rel='shortcut icon' type='image/png' href=${favicon}>
      <link rel='stylesheet' href='style.css'>
      <title>nexter - your home, your freedom</title>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
      <script src='client-bundle.js'></script>
    </body>
  </html>
  `;
};
