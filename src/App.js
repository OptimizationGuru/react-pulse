
import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
   return (
      <div className="app">
      <Header/>
      <Body/>
      </div>
   )
};

root.render(<AppLayout/>)