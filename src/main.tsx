import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
