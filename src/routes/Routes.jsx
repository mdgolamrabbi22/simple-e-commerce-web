import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home" 
import Contact from "../components/Contact";
import Login from "../components/Login"
import SignUp from "../components/SignUp";
import MainLayout from "../layout/MainLayout";
import About from "../components/About";
import Users from "../components/Users";
 const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/users",
                element:<Users></Users>
            },
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/signup",
        element:<SignUp></SignUp>
    },
 ]);

  export default routes