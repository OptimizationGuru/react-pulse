import { useState, useEffect, useContext } from 'react'
import RestaurantCard, { withOfferLabel } from './restaurant-card'
import { Link } from 'react-router-dom'
import Shimmer from './shimmer'
import useFetchRestaurantCards from './utils/useFetchRestaurantCards'
import UserContext from './utils/UserContext'

const Body = () => {
	const [searchText, setsearchText] = useState('')
	const [isTopRestaurantsTrue, setTopRestaurantsTrue] = useState(false)

	let restaurantCardsData = useFetchRestaurantCards()

	const RestaurantCardwithLabel = withOfferLabel(RestaurantCard)

	const filterTopRestaurants = () => {
		setTopRestaurantsTrue(bool => !bool)
	}

	const { loggedinUser, setUserName } = useContext(UserContext)

	// Conditional Rendenring

	return restaurantCardsData?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="mt-44">
			<div className="flex justify-start">
				<div className=" p-4 w-[400px] ml-56">
					<input
						type="text"
						className="px-16 py-3 w-full border border-solid  rounded-lg"
						placeholder="Search your Favourite Restaurants here...!"
						value={searchText}
						onChange={e => {
							setsearchText(e.target.value)
						}}
					/>
				</div>

				<div>
					<button
						className="px-6 py-4 bg-green-100 m-4 rounded-lg"
						onClick={filterTopRestaurants}>
						Top Rated Restaurants
					</button>
				</div>
				<div className=" p-4 w-[400px] ml-8 flex">
					<div className="m-4 w-auto border-black border-solid">
						<label>Set Your Name : </label>
					</div>
					<div className="w-[250px]">
						<input
							type="text"
							className="px-16 py-3 w-full border border-solid  rounded-lg"
							placeholder="Set your Name here...!"
							value={loggedinUser}
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
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
							<RestaurantCardwithLabel data={item?.info} />
						</Link>
					))}
			</div>
		</div>
	)
}
export default Body
