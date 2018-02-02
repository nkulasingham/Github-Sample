// ----------------------
// IMPORTS

// Config API, for adding reducers and configuring our ReactQL app
import config from 'kit/config';

import { Route, Switch } from 'react-router';

import Helmet from 'react-helmet';
import React from 'react';
import NotFound from 'src/components/NotFound';
import routes from 'src/routes';

import './styles.global.css';

config.setGraphQLEndpoint('https://api.github.com/graphql');

/* SERVER */

// Set our server config, by checking `SERVER` -- this code path will be
// eliminated by Webpack in the browser, so we can safely add this.

if (SERVER) {
  // By default, any exceptions thrown anywhere in the middleware chain
  // (including inside the `createReactHandler` func) will propogate up the
  // call stack to a default error handler that simply logs the message and
  // informs the user that there's an error.  We can override that default
  // behaviour with a func with a (e, ctx, next) -> {} signature, where `e` is
  // the error thrown, `ctx` is the Koa context object, and `next()` should
  // be called if you want to recover from the error and continue processing
  // subsequent middleware.  Great for logging to third-party tools, tc.
  config.setErrorHandler((e, ctx /* `next` is unused in this example */) => {
    // Mimic the default behaviour with an overriden message, so we know it's
    // working
    // eslint-disable-next-line no-console
    console.log('Custom error: ', e.message);
    ctx.body = 'Some kind of error. Check your source code.';
  });

  config.addBeforeMiddleware((ctx, next) => {
    const accessToken = '5c54be6b7928c3903eb6260265e75101d2d55f01';
    ctx.apollo.networkOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    return next();
  });
} else {
  config.setApolloNetworkOptions({
    authorization: 'Bearer 5c54be6b7928c3903eb6260265e75101d2d55f01',
  });

  config.addApolloMiddleware((ctx, next) => {
    if (ctx.options.headers) {
      ctx.options.headers = {
        ...ctx.options.headers,
        authorization: 'Bearer 5c54be6b7928c3903eb6260265e75101d2d55f01',
      };
    } else {
      ctx.options = { headers: {} };
      ctx.options.headers.authorization = 'Bearer 5c54be6b7928c3903eb6260265e75101d2d55f01';
    }
    return next();
  });
}

const App = () => (
  <div>
    <Helmet
      title="ReactQL application"
      meta={[
        {
          name: 'description',
          content: 'ReactQL starter kit app',
        },
      ]} />
    <Switch>
      {routes.map(({ path, container, exact }) => (
        <Route path={path} exact={exact} component={container} />
      ))}
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
