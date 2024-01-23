import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

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
]);

export const App = () => <RouterProvider router={router} />;
