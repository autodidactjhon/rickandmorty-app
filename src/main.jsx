import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import CharacterView from './pages/CharacterView/CharacterView.jsx';
import CharactersList from './pages/CharacterList/CharacterList.jsx';
import NotFound from './components/404/404.jsx';
import './index.css';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/characters',
    element: <CharactersList />,
  },
  {
    path: '/character/:id',
    element: <CharacterView />
  },
  {
    path: '/',
    element: <Navigate to="characters" />
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
