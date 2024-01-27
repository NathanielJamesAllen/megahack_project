import Home from './pages/Home';
import Blog from './pages/Blog';
import Team from './pages/Team';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/blog', component: <Blog /> },
  { path: '/team', component: <Team /> },
];

export default routes;