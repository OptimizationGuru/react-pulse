import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header_LOGO_URL } from './utils/constants'

const Header = () => {
	const name = 'Login'
	const [buttonName, changeName] = useState(name)

	const toggle = () => {
		buttonName === 'Login' ? (btnName = 'Logout') : (btnName = 'Login')
		changeName(btnName)
	}
	return (
		<div className="header">
			<div>
				<img className="logo" src={Header_LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact"> Contact Us</Link>
					</li>
					<li>
						<Link to="/groceries">Groceries</Link>
					</li>
					<li>Cart</li>
					<li>
						<button onClick={toggle} className="btn-name">
							{' '}
							{buttonName}
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
