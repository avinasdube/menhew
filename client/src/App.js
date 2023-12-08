import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import React from 'react';

import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Favourites from './pages/Favourites/Favourites';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';

function App() {

  const Layout = () => {
    return (
      <>
        <Outlet />
        <Footer />
      </>
    )
  }

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
          path: '/home',
          element: <Home />
        },
        {
          path: '/categories',
          element: <Categories />
        },
        {
          path: '/favourites',
          element: <Favourites />
        },
        {
          path: '/products/:category',
          element: <ProductList />
        }
      ]
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;