import { useState, useEffect } from 'react'
import RestaurantCard from './restaurant-card'
import { Link } from 'react-router-dom'
import Shimmer from './shimmer'


const Body =()=>{
    // console.log('re-rendered')
    const [restaurantList, setRestaurantList] = useState([])
    const [searchText, setsearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const  fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        const trimmed_data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
         setRestaurantList(trimmed_data) 
         setSuggestions(trimmed_data)           
    }
    

    useEffect(()=>{
          fetchData()
    },[])


    const searchRestaurants=()=>{
        if(searchText.length===0)
        setSuggestions(restaurantList)
       
        const searchedRestaurant =  restaurantList.filter(res=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
        setSuggestions(searchedRestaurant)
    }

    const filterTopRestaurants =()=>{
       
        const newRestaurantData = suggestions.filter(res => res?.info?.avgRating >= 4.5)
      
         setSuggestions(newRestaurantData)
        
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
             onClick={searchRestaurants}>
             Search
             </button>
             </div>
              <div  className="box">
            <button className="beautiful-button" onClick={filterTopRestaurants}>
                Top Rated Restaurants
                </button>
                </div> 
            </div>
            
            <div className="res-container">
               {
                suggestions.map((item) => 
                    <Link to={'/restaurant/'+ item?.info?.id} key={item?.info?.id}><RestaurantCard  data={item?.info}/></Link>
                )
               }
               
            </div>
            
        </div>
)
}
export default Body