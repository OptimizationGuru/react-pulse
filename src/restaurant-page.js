import { useParams } from 'react-router-dom'
import useFetchResData from './components/utils/useFetchResData'
import Shimmer from './components/shimmer'
import RestaurantCategory from './restaurant-category'
import { useState } from 'react'

const Restaurant = () => {
	const { resId } = useParams()

	const [showIndex, setShowIndex] = useState(0)

	const resturantProfile = useFetchResData(resId)
	const categories = resturantProfile[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
		c =>
			c?.card?.card?.['@type'] ===
			'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
	)
	const restaurantIntro = resturantProfile[0]?.card?.card?.info

	return resturantProfile.length == 0 ? (
		<Shimmer />
	) : (
		<div className="text-center mt-[150px] mb-4">
			<h1 className="font-bold text-4xl">{restaurantIntro?.name}</h1>
			<p className="font-bold text-lg">
				{restaurantIntro?.cuisines.join(', ')} - {restaurantIntro?.costForTwoMessage}
			</p>

			{categories?.map((category, idx) => (
				<RestaurantCategory
					key={category?.card?.card.title}
					data={category?.card?.card}
					showItems={idx === showIndex ? true : false}
					setShowIndex={() => setShowIndex(idx)}
				/>
			))}
		</div>
	)
}

export default Restaurant
