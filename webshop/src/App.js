import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/user/Layout';
import Home from './pages/user/Home';
import Admin from './pages/admin/Admin';
import Products from './pages/user/Products';
import AdminLayout from './components/admin/AdminLayout';
import AdminProducts from './pages/admin/AdminProducts';
import AdminAddProduct from './pages/admin/AdminAddProduct';
import AdminDeleteProduct from './pages/admin/AdminDeleteProduct';


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
      } ,
      {
        path: '/termekek/:id/torles',
        element: <AdminDeleteProduct />
      }
    ]

  },
  {
    path:"/admin",
    element: <AdminLayout />,
    children: [
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/admin/termekek',
        element: <AdminProducts />
      },
      {
        path: '/admin/termek-felvitel',
        element: <AdminAddProduct />
      },
    
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
