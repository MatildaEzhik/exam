import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {PizzaCatalog} from "../components/pizzaCatalog/PizzaCatalog.jsx";
import {Login} from "../components/login/Login.jsx";
import {Cart} from "../components/cart/Cart.jsx";
import {Layout} from "../components/layout/Layout.jsx";
import {Logout} from "../components/logout/Logout.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,  // Layout будет обёрткой для всех маршрутов
        children: [
            {
                path: '/', element: <PizzaCatalog />
            },
            {
                path: '/login', element: <Login />
            },
            {
                path: '/cart', element: <Cart />,
            },
            {
                path:'/logout', element: <Logout/>
            }
        ],
    },
]);