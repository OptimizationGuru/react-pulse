import { useEffect, useState } from 'react'
import { swiggy_restaurant_cards_url } from './constants'

//  Single Responsibility Principle
const useFetchRestaurantCards = () => {
	const [restaurantCardsData, setRestaurantCardsData] = useState([])
	let trimmed_data = []

	useEffect(() => {
		fetchRestaurantData()
	}, [])

	const fetchRestaurantData = async () => {
		try {
			const data = await fetch(swiggy_restaurant_cards_url)
			const json = await data.json()

			trimmed_data =
				json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

			setRestaurantCardsData(trimmed_data)
		} catch (err) {
			console.error(err)
		}
	}

	return restaurantCardsData
}

export default useFetchRestaurantCards
