import { useState, useEffect } from 'react'
import RestaurantCard from './restaurant-card'
import { Link } from 'react-router-dom'
import Shimmer from './shimmer'
import useFetchRestaurantCards from './utils/useFetchRestaurantCards'

const Body = () => {
	const [searchText, setsearchText] = useState('')
	const [isTopRestaurantsTrue, setTopRestaurantsTrue] = useState(false)

	let restaurantCardsData = useFetchRestaurantCards()

	const filterTopRestaurants = () => {
		setTopRestaurantsTrue(bool => !bool)
	}

	// Conditional Rendenring

	return restaurantCardsData?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="mt-44">
			<div className="flex justify-center">
				<div className=" p-4 w-2/5">
					<input
						type="text"
						className="px-16 py-4 w-full border border-solid "
						placeholder="Search your Favourite Restaurants here...!"
						value={searchText}
						onChange={e => {
							setsearchText(e.target.value)
						}}
					/>
				</div>
				<div>
					<button className="px-6 py-4 bg-green-100 m-4 rounded-lg">Search</button>
				</div>
				<div>
					<button
						className="px-6 py-4 bg-green-100 m-4 rounded-lg"
						onClick={filterTopRestaurants}>
						Top Rated Restaurants
					</button>
				</div>
			</div>

			<div className="flex flex-wrap justify-center">
				{restaurantCardsData
					.filter(item => {
						if (isTopRestaurantsTrue) {
							return item?.info?.avgRating >= 4.5
						}

						return item
					})
					.filter(item => {
						if (searchText.trim().length) {
							return item?.info?.name
								.toLowerCase()
								.trim()
								.includes(searchText.toLowerCase().trim())
						}

						return item
					})
					.map(item => (
						<Link to={'/restaurant/' + item?.info?.id} key={item?.info?.id}>
							<RestaurantCard data={item?.info} />
						</Link>
					))}
			</div>
		</div>
	)
}
export default Body
