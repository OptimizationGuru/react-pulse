import {restaurtant_url, img_url} from './components/utils/constants'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


const Restaurant=()=>{
     
    const [resName , setName] = useState()
    const [resCuisines, setCuisines] = useState([])
    const [area, setAreaName] = useState()
    const [costofTwo, setCostForTwo] = useState()
    const [ rating, setRating] = useState()
    const [ cloudImageId, setCloudinaryImageId] = useState()
    const [ localityName, setLocality] = useState()
   const [totalRatings, setTotalRatings] = useState()

    const { resId } = useParams();
   
    const fetchRestaurantData= async()=>{
        const data = await  fetch(restaurtant_url + resId) 
        const json = await data.json()
        console.log(json?.data?.cards[0]?.card?.card?.info, 'data')
        const { name, cuisines, cloudinaryImageId, avgRating,locality,costForTwo, totalRatingsString } = json?.data?.cards[0]?.card?.card?.info
      setName(name)
      setCuisines(cuisines)
      setAreaName(area)
      setCostForTwo(costForTwo)
      setRating(avgRating)
      setCloudinaryImageId(cloudinaryImageId)
      setLocality(locality)
      setTotalRatings(totalRatingsString)
    }

    useEffect(()=>{
        fetchRestaurantData()
    },[])
    
    return (
        <div className="restaurant-page">
        <header className="restaurant-page-header">
          <h1>{resName}</h1>
          <p> Cuisines : {resCuisines.join(',')}</p>
          
          <span className="star">{area}</span>
                <span className="rating-value">{localityName}</span>
        </header>
        <main className="main-content">
          <section className="restaurant-info">
            <img className="restaurant-image" src={img_url+cloudImageId} alt="Restaurant Image" />
            <div className="info-text">
              <p>Delicious food delivered to your doorstep.</p>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="rating-value">{rating}</span> {totalRatings}
              </div>
            </div>
          </section>
          <section className="menu">
            <h2>Menu</h2>
            {/* Add your menu items here */}
            <div className="menu-item">
              <p>Pizza</p>
              <p>$10.99</p>
            </div>
            <div className="menu-item">
              <p>Pasta</p>
              <p>$8.99</p>
            </div>
            {/* Add more menu items as needed */}
          </section>
        </main>
        <footer className="footer">
          <button className="order-button">Order Now</button>
        </footer>
      </div>
    )
}

export default Restaurant