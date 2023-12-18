
import React from "react";
import  ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))
/*
* Building Food Ordering App - QuickCrave
* Header - Logo, Nav-Items, Cart
* Body - Search, Restaurant Container -Cards inside - img, Star Rating, cuisine  delivery time etc
* Footer - copyright, links, contact, address, info
*/

const Header = () => {
 return (
    <div className="header">
        <div>
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmaaj1dqXMUKLbNAjVKYq6OhtCmAuWEKIjg&usqp=CAU"/>
        </div>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
        </ul>
        </div>
    </div>
 )
};


//JS object for giving inline style
const styleCard = {
    backgroundColor : "#f0f0f0",
};

const RestaurantCard =(props)=>{
 console.log(props)
 const {resName, cuisine} = props
    return(
        <div className="res-card" style={styleCard}>
           <img className="res-logo"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/59b64f9bb67234987652437f21d379c2"/>
           <div className="res-desc">
            <h2>{resName}</h2>
            <h3> {cuisine}</h3>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
            </div>

        </div>
    )
}

const Body =()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
               <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
               <RestaurantCard resName="Oven Story" cuisine="Pizza, Italian"/>
            </div>
        </div>
    )
}


const AppLayout = () => {
   return (
    <div className="app">
   <Header/>
   <Body/>
    </div>
   )
};

root.render(<AppLayout/>)