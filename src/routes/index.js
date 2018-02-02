import Home from 'src/containers/Home';
import Results from 'src/containers/Results';

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
];

export default routes;
