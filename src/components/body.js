import { useState, useEffect } from 'react'
import RestaurantCard from './restaurant-card'
import Shimmer from './shimmer'


const Body =()=>{
    // console.log('re-rendered')
    const [restaurantList, setRestaurantList] = useState([])
    const [searchText, setsearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const  fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.147291053160085&lng=75.84629114717245&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const json = await data.json()
        const trimmed_data = json.data.cards.splice(3, json.data.cards.length-1)
         setRestaurantList(trimmed_data) 
         setSuggestions(trimmed_data)           
    }
    

    useEffect(()=>{
          fetchData()
    },[])


    const filterRestaurants=()=>{
        if(searchText.length===1)
        // setSuggestions(restaurantList)
        console.log('filter res', searchText.length)
        const searchedRestaurant =  restaurantList.filter(res=> res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
        setSuggestions(searchedRestaurant)
    }
    
// Conditional Rendenring

    return   restaurantList.length===0 ? (<Shimmer/> ): (
    
        <div className="body">     
            <div className="top-container">
            <div className="box">
            <div className='search-component'>
            <input
              type="text"
              className='search-input'
              placeholder="Search your Favourite Restaurants...!"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value); 
              }}
            />
          </div>
              </div>
              <div className="box">
             <button className='search-btn'
             onClick={filterRestaurants}>
             Search
             </button>
             </div>
              <div  className="box">
            <button className="beautiful-button" onClick={()=>{
                    const newRestaurantData = suggestions.filter(res => res?.card?.card?.info?.avgRating >= 4)
                    
                    setRestaurantList(newRestaurantData)
                }}>
                Top Rated Restaurants
                </button>
                </div> 
            </div>
            
            <div className="res-container">
               {
                suggestions.map((item, idx) => 
                    <RestaurantCard key={idx} data={item.card.card.info}/>
                )
               }
               
            </div>
            
        </div>
)
}
export default Body