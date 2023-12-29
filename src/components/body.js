import { useState, useEffect } from 'react'
import RestaurantCard from './restaurant-card'
import Shimmer from './shimmer'


const Body =()=>{
    const [restaurantList, setRestaurantList] = useState([])

    const  fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.147291053160085&lng=75.84629114717245&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const json = await data.json()
        const trimmed_data = json.data.cards.splice(3, json.data.cards.length-1)
         setRestaurantList(trimmed_data)            
    }
    

    useEffect(()=>{
          fetchData()
    },[])

   


// Conditional Rendenring

    return   restaurantList.length===0 ? (<Shimmer/> ): (<div className="body">
             
            <div className="search">
            <button className="beautiful-button" onClick={()=>{
                    const newRestaurantData = restaurantList.filter(res => res?.card?.card?.info?.avgRating >= 4)
                    
                    setRestaurantList(newRestaurantData)
                }}>
                Top Rated Restaurants
                </button>
                
            </div>
            <div className="res-container">
               {
                restaurantList.map((item, idx) => 
                    <RestaurantCard key={idx} data={item.card.card.info}/>
                )
               }
               
            </div>
        </div>
)
}
export default Body