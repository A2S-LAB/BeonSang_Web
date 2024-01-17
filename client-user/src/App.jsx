import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
]);

export const App = () => <RouterProvider router={router} />;
