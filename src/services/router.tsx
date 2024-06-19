import BasicLayout from '@components/BasicLayout';
import Home from '@pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
