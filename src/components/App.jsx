import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
// import Home from './Home';
import '../stylesheets/App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/shop',
      element: <Shop />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
