import Blog from '@pages/Blog/Blog';
import Home from '@pages/Home/Home';
import Shop from '@pages/Shop/Shop';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);
