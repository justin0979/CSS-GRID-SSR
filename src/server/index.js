import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { matchRoutes } from 'react-router-config';
import createStore from '#helpers/createStore';
import renderer from '#helpers/renderer';
import config from '#config/webpack.dev-client';
import Routes from '#client/Routes';

const app = express();
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  })
);
app.use(webpackHotMiddleware(compiler));
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => `Server up at http://localhost:${PORT}`);
