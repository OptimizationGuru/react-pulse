
import {LOGO_URL} from './utils/constants'


//JS object for giving inline style
const styleCard = {
    backgroundColor : "#f0f0f0",
};

const RestaurantCard =(data)=>{
    const {name, avgStar, cuisine, delivery} = data.data
       return(
           <div className="res-card" style={styleCard}>
              <img className="res-logo"  src={LOGO_URL}/>
              <div className="res-desc">
               <h2>{name}</h2>
               <h3> {cuisine}</h3>
               <h4>{avgStar}</h4>
               <h4>{delivery}</h4>
               </div>
   
           </div>
       )
   }

   export default RestaurantCard