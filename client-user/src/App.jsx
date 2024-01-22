import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Recruit } from './pages/Recruit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/recruit',
    element: <Recruit />,
  },
]);

export const App = () => <RouterProvider router={router} />;
