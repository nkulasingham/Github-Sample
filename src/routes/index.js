import Home from 'src/containers/Home';
import Results from 'src/containers/Results';
import User from 'src/containers/User';

const routes = [
  {
    container: Home,
    path: '/',
    exact: true,
  },
  {
    container: Results,
    path: '/results',
  },
  {
    container: User,
    path: '/users/:user',
    exact: true,
  },
];

export default routes;
