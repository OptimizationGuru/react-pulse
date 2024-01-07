import { swiggy_resId_url } from './constants'
import { useEffect, useState } from 'react'

//  Single Responsibility Principle

const useFetchResData = resId => {
	const [resData, setResData] = useState([])

	useEffect(() => {
		fetchRestaurantData()
	}, [])

	const fetchRestaurantData = async () => {
		const data = await fetch(swiggy_resId_url + resId)
		const json = await data.json()
		// console.log(json?.data?.cards[0]?.card?.card?.info, 'json')
		const restaurantData = json?.data?.cards[0]?.card?.card?.info
		setResData(restaurantData)
	}

	return resData
}

export default useFetchResData
