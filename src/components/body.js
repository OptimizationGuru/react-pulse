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
		<div className="body">
			<div className="top-container">
				<div className="box">
					<div className="search-component">
						<input
							type="text"
							className="search-input"
							placeholder="Search your Favourite Restaurants...!"
							value={searchText}
							onChange={e => {
								setsearchText(e.target.value)
							}}
						/>
					</div>
				</div>
				<div className="box">
					<button className="search-btn">Search</button>
				</div>
				<div className="box">
					<button className="beautiful-button" onClick={filterTopRestaurants}>
						Top Rated Restaurants
					</button>
				</div>
			</div>

			<div className="res-container">
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
