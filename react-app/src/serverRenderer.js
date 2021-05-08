import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { END } from 'redux-saga';
import { ChunkExtractor } from '@loadable/server';
import * as path from 'path';

import App from './App';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

function renderHTML(html, script, style, link, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Movie App</title>
          ${style}
          ${link}
        </head>
        <body>
          <section id="root">${html}</section>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          ${script}
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    // This context object contains the results of the render
    const context = {};
    const store = configureStore();

    const renderFinal = () => {
      // This is the stats file generated by webpack loadable plugin
      const statsFile = path.resolve('./dist/loadable-stats.json');
      // We create an extractor from the statsFile
      const extractor = new ChunkExtractor({ statsFile });
      // Wrap your application using "collectChunks"
      const tsx = extractor.collectChunks(
        <App
          context={context}
          location={req.url}
          Router={StaticRouter}
          store={store}
        />
      );
      // Render your application
      const html = renderToString(tsx);
      // You can now collect your script tags
      const scriptTags = extractor.getScriptTags();
      // or extractor.getScriptElements();
      // You can also collect your "preload/prefetch" links
      const linkTags = extractor.getLinkTags();
      // or extractor.getLinkElements();
      // And you can even collect your style tags (if you use "mini-css-extract-plugin")
      const styleTags = extractor.getStyleTags();
      // or extractor.getStyleElements();

      // context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const preloadedState = store.getState();

      res.send(renderHTML(html, scriptTags, styleTags, linkTags, preloadedState));
    };
    const task = store.runSaga(rootSaga);
    // Do first render, starts initial actions.
    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );
    renderToString(renderRoot());
    // When the first render is finished, send the END action to redux-saga.
    store.dispatch(END);
    if (!task.done && task.toPromise) task.done = task.toPromise();
    task.done.then(() => renderFinal());
  };
}