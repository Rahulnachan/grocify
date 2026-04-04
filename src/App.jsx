import Home from './component/Home'
import Allproduct from './component/Allproduct'
import Layout from './component/Layout'
import Contact from './component/Contact'
import Order from './component/Order'
import Products from './component/Products'
import AdminOrders from './component/AdminOrders'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "allproduct", element: <Allproduct /> },
        { path: "contact", element: <Contact /> },
        { path: "order", element: <Order /> },           // customer order page
        { path: "products", element: <Products /> },

        // ✅ ADMIN ORDERS PAGE
        { path: "admin/orders", element: <AdminOrders /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
