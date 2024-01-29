import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Body from './components/body'
import ContactUS from './components/contact-us'
import About from './components/about'
import Error from './components/error'
import Restaurant from './restaurant-page'
import UserContext from './components/utils/UserContext'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './components/utils/appStore'
import Cart from './components/cart'
import Login from './components/login'

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
	const [userName, setUserName] = useState()

	// authentication
	useEffect(() => {
		// Make an API call and get the data
		const data = {
			name: 'Shivam Tiwari'
		}
		setUserName(data.name)
	}, [])

	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedinUser: userName, setUserName }}>
				<div className="app">
					<Header />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	)
}

const Grocery = lazy(() => import('./components/groceries'))
const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Body />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/contact',
				element: <ContactUS />
			},
			{
				path: '/restaurant/:resId',
				element: <Restaurant />
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/groceries',
				element: (
					<Suspense fallback={<div>Components are loading please wait...</div>}>
						<Grocery />
					</Suspense>
				)
			}
		],
		errorElement: <Error />
	},
	{
		path: '/login',
		element: <Login />
	}
])

root.render(<RouterProvider router={appRouter} />)
