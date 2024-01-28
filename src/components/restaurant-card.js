import { swiggy_img_url } from './utils/constants'
import { useContext } from 'react'
import UserContext from './utils/UserContext'

const RestaurantCard = resData => {
	const { loggedinUser } = useContext(UserContext)
	console.log(loggedinUser, 'Akshay Saini')
	// console.log(resData.data, 'resData')
	const {
		name,
		locality,
		areaName,
		avgRating,
		cuisines,
		isOpen,
		cloudinaryImageId,
		aggregatedDiscountInfoV3
	} = resData.data

	return (
		<div className="m-4 p-4 w-[250px] h-[480px] rounded-xl bg-gray-100 hover:bg-gray-300 relative">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-auto rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
				<img
					className="h-full w-full object-cover object-center lg:h-full lg:w-full"
					src={swiggy_img_url + cloudinaryImageId}
				/>
				<div className=" absolute top-1/2  rounded-md ml-2 mt-2  w-auto bg-slate-500">
					<h1 className="text-white font-semibold text-2xl pl-2 ">
						{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
					</h1>
				</div>
			</div>
			<h2 className="font-bold py-4 my-1 text-lg overflow-hidden text-ellipsis">{name}</h2>
			<p>Average Rating: {avgRating} ⭐️</p>
			<p className="text-wrap">Cuisines: {cuisines.join(', ')}</p>
			<p>
				Address: {locality} {areaName}
			</p>
			{/* <p>Is Open: {isOpen ? 'Open' : 'Closed'} </p> */}
		</div>
	)
}

//Higher Order Component input - Restaurant Card => output ==>> RestaursntCardwithOfferLabel

export const withOfferLabel = RestaurantCard => {
	return props => {
		return (
			<div className="">
				<label className=" absolute text-white bg-black rounded-md ml-8 mt-4 p-2  z-10 ">
					Promoted
				</label>
				<RestaurantCard {...props} />
			</div>
		)
	}
}

export default RestaurantCard
