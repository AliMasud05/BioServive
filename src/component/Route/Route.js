
import Shops from "../../pages/CollectShop/Shops";
import Contact from "../../pages/Contact/Contact";

import Events from "../../pages/Events/Events";
import Home from "../../pages/Home/Home";
import MemberForm from "../Form/MemberForm";



const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

 const router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/events',
                element:<Events/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            
            {
                path:'/memberform',
                element:<MemberForm/>
            },
            {
                path:'/shops',
                element:<Shops/>
            },
            

        ]
    }
])
export default router;