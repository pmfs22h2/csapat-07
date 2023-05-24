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
import AdminEditProduct from './pages/admin/AdminEditProduct';
import Cartpage from './pages/user/Cartpage';
import UserRegistration from './pages/user/UserRegistration';
import Login from './pages/user/Login';
import { AuthContext } from './context/AuthContext';
import { useState } from 'react';
import { CartContext } from './context/cartContext';
import Orders from './pages/user/Orders';

import AdminUserList from './pages/admin/AdminUserList';
import AdminDisplayOrders from './pages/admin/AdminDisplayOrders';
import AdminOrderDetails from './components/admin/AdminOrderDetails';

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
        path: '/termekek/:id/torles',
        element: <AdminDeleteProduct />
      },
      {
        path: '/kosar',
        element: <Cartpage />
      },
      {
        path: '/regisztracio',
        element: <UserRegistration />
      },
      {
        path: '/belepes',
        element: <Login />
      },
      {
        path:"/megrendeleseim",
        element: <Orders />
      }
    ]

  },
  {
    path: "/admin",
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
      {
        path: '/admin/termekek/:id/modositas',
        element: <AdminEditProduct />
      },
      {
        path: '/admin/vasarlok',
        element: <AdminUserList />
      },
      {
        path: '/admin/megrendelesek',
        element: <AdminDisplayOrders />
      }, 
      {
        path: '/admin/megrendelesek/:orderId',
        element: <AdminOrderDetails />
      }

    ]
  }
])


function App() {
  const [userData, setUserData] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ userData, setUserData }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <RouterProvider router={router}>
          </RouterProvider>
        </CartContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
