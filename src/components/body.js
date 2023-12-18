import RestaurantCard from "./restaurant-card"
import restaurantData from './utils/restaurantData'
import { useState } from "react" // hook used to create state variables

const Body =()=>{

    // State variable => Super powerful variable => it maintains the state of the component
    // you have to create a state variable using useState() hook
    //  whenever you call this useState() hook => it will return you a state variable contained in an array

const [restaurantList, setRestaurantList] = useState(restaurantData);  //state variable with default value as '[]'

    return(
        <div className="body">
            <div className="search">
                <button className="search-btn" onClick={()=>{
                    const newRestaurantData = restaurantList.filter(res=> res.avgStar >= 4)
                    setRestaurantList(newRestaurantData)
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
               {
                restaurantList.map(res => 
                    <RestaurantCard key={res.id} data={res}/>
                )
               }
               
            </div>
        </div>
    )
}

export default Body