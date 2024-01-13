import { swiggy_img_url } from './utils/constants'

const RestaurantCard = resData => {
	// console.log(resData.data, 'resData')
	const { name, locality, areaName, avgRating, cuisines, isOpen, cloudinaryImageId } =
		resData.data
	return (
		<>
			<div className="m-4 p-4 w-[250px] h-[480px] rounded-xl bg-gray-100 hover:bg-gray-300">
				<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
					<img
						className="h-full w-full object-cover object-center lg:h-full lg:w-full"
						src={swiggy_img_url + cloudinaryImageId}
					/>
				</div>
				<h2 className="font-bold py-4 my-1 text-lg overflow-hidden text-ellipsis">
					{name}
				</h2>
				<p>Average Rating: {avgRating} ⭐️</p>
				<p className="text-wrap">Cuisines: {cuisines.join(', ')}</p>
				<p>
					Address: {locality} {areaName}
				</p>
				<p>Is Open: {isOpen} </p>
			</div>
		</>
	)
}

export default RestaurantCard
