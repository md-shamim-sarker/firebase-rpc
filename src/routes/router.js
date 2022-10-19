import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home/Home";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/orders",
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            },
            {
                path: "/inventory",
                element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ],
    },
]);

export default router;