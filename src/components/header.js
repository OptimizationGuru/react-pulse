import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header_LOGO_URL } from './utils/constants'
import UserContext from './utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
	const name = 'Login'
	const [buttonName, changeName] = useState(name)

	const toggle = () => {
		buttonName === 'Login' ? (btnName = 'Logout') : (btnName = 'Login')
		changeName(btnName)
	}
	const { loggedinUser } = useContext(UserContext)

	//Selector to read data from cartSlice ==> subscribing to the store using selector ==> useSelector gives access to the store

	const cartItems = useSelector(store => store.cart.items)
	console.log(cartItems)

	return (
		<div className="flex justify-between h-32 bg-pink-100  shadow-md mb-4  sm:bg-yellow-50 lg:bg-green-50 fixed w-full top-0 left-0 z-50">
			<div>
				<img className="w-[139px]" src={Header_LOGO_URL} />
			</div>
			<div>
				<ul className="flex justify-center p-4 m-4">
					<li className="m-4 p-4">
						<Link to="/">Home</Link>
					</li>
					<li className="m-4 p-4">
						<Link to="/about">About</Link>
					</li>
					<li className="m-4 p-4">
						<Link to="/contact"> Contact Us</Link>
					</li>
					<li className="m-4 p-4">
						<Link to="/groceries">Groceries</Link>
					</li>
					<li className="m-4 p-4 font-bold text-xl">
						<Link to="/cart">Cart ({cartItems.length} Items)</Link>
					</li>
					<li className="m-4 p-4">
						<Link to="/login">
							<button onClick={toggle}>{buttonName}</button>
						</Link>
					</li>
					<li className="m-4 p-4 font-bold">{loggedinUser}</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
