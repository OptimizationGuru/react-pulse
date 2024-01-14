import { useState } from 'react'
import ItemList from './dishes-list'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	const toggle = () => {
		setShowIndex()
	}

	// const [showItems, setShowItems] = useState(false)

	return (
		<div>
			<div className="w-6/12 mx-auto my-5 shadow-lg p-4 bg-gray-50 ">
				<div className="flex justify-between cursor-pointer" onClick={toggle}>
					<span className="font-bold  text-lg h-4 ml-4">
						{data.title} ({data.itemCards.length})
					</span>
					<span className="end-10">⬇️</span>
				</div>

				{showItems && <ItemList items={data?.itemCards} />}
			</div>
		</div>
	)
}

export default RestaurantCategory
