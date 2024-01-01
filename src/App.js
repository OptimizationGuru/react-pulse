
import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import ContactUS from "./components/contact-us";
import About from "./components/about";
import Error from "./components/error";
import Restaurant from "./restaurant-page";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
   return (
      <div className="app">
      <Header/>
      <Outlet/>
      </div>
   )
};
const appRouter = createBrowserRouter(
   [
      {
         path:'/',
         element: <AppLayout/>,
         children:[
            {
               path:'/',
               element: <Body />,
            },
            {
               path:'/about',
               element: <About/>,
            },
            {
               path:'/contact',
               element: <ContactUS/>,
            },
            {
               path:'/restaurant/:resId',
               element: <Restaurant/>,
            },
         ],
         errorElement:<Error/>

      },
      
   ]
)


root.render(<RouterProvider router={appRouter}/>)