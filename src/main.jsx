import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Page/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ProjectDetails from './Components/ProjectDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/projects/:id',
        Component: ProjectDetails,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
