import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Poperty from "../Pages/Porperty/Poperty";
import Search from "../Pages/Search/Search";
import Details from "../Pages/Details/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/buy',
                element:<Poperty/>
            },
            {
                path:'/search',
                element:<Search/>
            },
            {
                path:'/details',
                element:<Details/>
            },
        ]
      },
])