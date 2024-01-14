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

		// console.log(json, 'json')
		const restaurantData = json?.data?.cards

		setResData(restaurantData)
	}

	return resData
}

export default useFetchResData
