

const img_url ='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
const RestaurantCard =(resData)=>{
    const {id, name, locality, areaName, avgRating, cuisines, isOpen, cloudinaryImageId } = resData.data 
    return (
        <>
        <div className="restaurant-card">
        <img src= {img_url+cloudinaryImageId}/>
      <h2>{name}</h2>
      <p>Average Rating: {avgRating} ⭐️</p>
      <p>Cuisines: {cuisines.join(',')}</p>
      <p>Address: {locality} {areaName}</p>
      <p>Is Open: {isOpen} </p>
    </div>
    </>
    )
}

export default RestaurantCard