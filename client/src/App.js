import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';

// importing pages and components
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Favourites from './pages/Favourites/Favourites';
import ProductList from './components/ProductList/ProductList';
import Product from './pages/Product/Product';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';

// importing authentication layout
import Protected from './layout/AuthLayout';
import Layout from './layout/AppLayout';

function App() {

  const router = createHashRouter([
    {
      path: '/',
      element: (
        <Protected authentication={true}>
          <Layout />
        </Protected>
      ),
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
          path: '/profile/:fullname',
          element: <Profile />
        },
        {
          path: '/products/:productCategory',
          element: <ProductList />
        },
        {
          path: '/products/:category/:_id',
          element: <Product />
        }
      ]
    },
    {
      // doesn't requires authentication to access
      path: '/signup',
      element: (
        <Protected authentication={false}>
          <Signup />
        </Protected>
      )
    },
    {
      // doesn't requires authentication to access
      path: '/login',
      element: (
        <Protected authentication={false}>
          <Login />
        </Protected>
      )
    },
    {
      // requires authentication to access
      path: '/dashboard',
      element: (
        <Protected authentication={true}>
          <Dashboard />
        </Protected>
      )
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;