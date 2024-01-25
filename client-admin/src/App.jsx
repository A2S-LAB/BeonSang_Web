import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { UserMain } from './pages/UserMain';
import { UserMenu } from './pages/UserMenu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },

  {
    path: '/user/main',
    element: <UserMain />,
  },
  {
    path: '/user/menu',
    element: <UserMenu />,
  },
]);

export const App = () => <RouterProvider router={router} />;
