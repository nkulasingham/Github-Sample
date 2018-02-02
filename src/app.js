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
const accessToken = process.env.ACCESS_TOKEN;
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
    ctx.apollo.networkOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    return next();
  });
} else {
  config.setApolloNetworkOptions({
    authorization: `Bearer ${accessToken}`,
  });

  config.addApolloMiddleware((ctx, next) => {
    if (ctx.options.headers) {
      ctx.options.headers = {
        ...ctx.options.headers,
        authorization: `Bearer ${accessToken}`,
      };
    } else {
      ctx.options = { headers: {} };
      ctx.options.headers.authorization = `Bearer ${accessToken}`;
    }
    return next();
  });
}

const App = () => (
  <div>
    <Helmet
      title="Gitgazers"
      meta={[
        {
          name: 'description',
          content: 'Explore Github Profiles Here',
        },
      ]} />
    <Switch>
      {routes.map(({ path, container, exact }) => (
        <Route key={path} path={path} exact={exact} component={container} />
      ))}
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
