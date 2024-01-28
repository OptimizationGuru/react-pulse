import { useDispatch } from 'react-redux'
import { swiggy_img_url } from './components/utils/constants'
import { addItem } from './components/utils/cartSlice'

const ItemList = ({ items }) => {
	const dispatch = useDispatch()

	const handleAddItem = item => {
		// Dispatch an Action
		dispatch(addItem(item))
	}
	return (
		<div>
			{items.map(item => (
				<div
					key={item.card?.info.id}
					className="p-4 m-4 border-b-2 border-gray-200 text-left flex justify-between">
					<div className="w-9/12">
						<div className="p-2">
							<span>{item.card?.info?.name}</span>
							<span>
								- ₹
								{item.card?.info?.price
									? item.card?.info.price / 100
									: item.card?.info.defaultPrice / 100}
							</span>
						</div>
						<p className="text-xs px-2">{item.card?.info.description}</p>
					</div>
					<div className=" mx-4 w-3/12 relative">
						<div className="absolute bg-gray-200 py-2 px-4 shadow-md rounded-lg bottom-1 justify-center">
							<button className="" onClick={() => handleAddItem(item)}>
								Add +
							</button>
						</div>
						<img className="rounded-md" src={swiggy_img_url + item.card?.info.imageId} />
					</div>
				</div>
			))}
		</div>
	)
}

export default ItemList
