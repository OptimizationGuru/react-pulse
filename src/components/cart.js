import ItemList from '../dishes-list'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart } from './././utils/cartSlice'
const Cart = () => {
	const cartItems = useSelector(store => store.cart.items)
	const dispatch = useDispatch()
	const handleClearCart = () => {
		dispatch(clearCart())
	}
	return (
		<div className="mt-40">
			<div className="flex justify-center">
				<div className="text-center font-bold text-2xl h-4 w-40 p-4">
					<p>Cart</p>
				</div>
				<div className="">
					<button className="bg-green-100 p-4 rounded-lg" onClick={handleClearCart}>
						Clear Cart
					</button>
				</div>
			</div>
			<div className="mx-auto my-[10px] p-4">
				{cartItems.length && <ItemList items={cartItems} />}
			</div>
		</div>
	)
}

export default Cart
