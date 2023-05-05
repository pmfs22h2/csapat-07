import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/termekek',
        element: <Products />
      },
      {
        path: '/admin',
        element: <Admin />
      }



    ]

  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
