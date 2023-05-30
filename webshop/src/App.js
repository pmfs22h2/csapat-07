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
import AdminLogin from './pages/admin/AdminLogin';
import { AdminAuthContext } from './context/AdminAuthContext';
import Orders from './pages/user/Orders';
import AdminUserList from './pages/admin/AdminUserList';
import AdminDisplayOrders from './pages/admin/AdminDisplayOrders';
import AdminOrderDetails from './components/admin/AdminOrderDetails';
import AdminCategories from './pages/admin/AdminCategories';
import AdminAuth from './components/admin/AdminAuth';
import AdminCategoriesList from './pages/admin/AdminCategoriesList';
import { SearchValue } from './context/searchValueContext';
import AdminCategoryModify from './pages/admin/AdminCategoryModify';
import AdminCategoryDelete from './pages/admin/AdminCategoryDelete';
import NotFoundComp from './components/user/NotFoundComp';
import About from './pages/user/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contactpage from './pages/user/ContactPage';
import ProductWizard from './pages/user/ProductWizard';
import MainStepper from './components/user/ProductWizard/MainStepper';
import IntroPage from './components/user/ProductWizard/IntroPage';
import WizardContext from './context/WizardContext';


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
        path: '/about',
        element: <About />
      },
      {
        path: '/termekek',
        element: <Products />
      },
      {
        path: '/varazslo',
        element: <IntroPage />
      },
      {
        path: '/kerdesek',
        element: <MainStepper />
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
        path: '/admin-belepes',
        element: <AdminLogin />
      },
      {
        path: "/megrendeleseim",
        element: <Orders />
      },
      {
        path: "/kapcsolat",
        element: <Contactpage />
      },
      {
        path: "*",
        element: <NotFoundComp />
      }
    ]

  },
  {
    path: "/admin",
    element: <AdminAuth><AdminLayout /></AdminAuth>,
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
        path: '/admin/kategoriak',
        element: <AdminCategoriesList />
      },
      {
        path: '/admin/megrendelesek/:orderId/adatlap',
        element: <AdminOrderDetails />
      },
      {
        path: '/admin/kategoriak',
        element: <AdminCategoriesList />
      },
      {
        path: '/admin/kategoriak/uj-kategoria',
        element: <AdminCategories />
      },
      {
        path: '/admin/kategoriak/:id/szerkesztes',
        element: <AdminCategoryModify />
      },
      {
        path: '/admin/kategoriak/:kategoriaId/torles',
        element: <AdminCategoryDelete />
      }
    ]
  }
])

function App() {
  const [userData, setUserData] = useState(null);
  const [cart, setCart] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [priceTag, setPriceTag] = useState({});

  return (
    <div className="App">
      <WizardContext.Provider value={{ priceTag, setPriceTag }}>
        <SearchValue.Provider value={[searchValue, setSearchValue]}>
          <AuthContext.Provider value={{ userData, setUserData }}>
            <AdminAuthContext.Provider value={{ admin, setAdmin }}>
              <CartContext.Provider value={{ cart, setCart }}>
                <RouterProvider router={router}>
                </RouterProvider>
              </CartContext.Provider>
            </AdminAuthContext.Provider>
          </AuthContext.Provider>
        </SearchValue.Provider>
      </WizardContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
