import React, { useState } from 'react'
import { useRef } from 'react'
import { login_page_bg_img_url } from './utils/constants'
import FormValidator from './utils/formValidator'

const Login = () => {
	const [isRegisterd, setIsRegistered] = useState(true)
	const [errmsg, setErrmsg] = useState('')

	const name = useRef(null)
	const phone = useRef(null)
	const email = useRef(null)
	const password = useRef(null)

	const toggleForm = () => {
		setIsRegistered(!isRegisterd)
	}

	const validateForm = () => {
		const error = FormValidator(
			isRegisterd,
			email?.current?.value,
			phone?.current?.value,
			password?.current.value
		)
		setErrmsg(error)
	}
	return (
		<div>
			<div className="absolute">
				<img src={login_page_bg_img_url} alt="background-img" />
			</div>
			<div className="absolute bg-gray-300 w-[420px] h-[500px] my-[200px] mx-auto right-0 left-0 text-black bg-opacity-85 overflow-auto">
				<form
					onSubmit={e => {
						e.preventDefault()
					}}
					className="p-4 m-4">
					<h1 className="mx-auto right-0 left-0 p-4 m-2 text-3xl font-bold">
						{isRegisterd ? 'Sign In' : 'Sign Up'}
					</h1>
					{!isRegisterd && (
						<input
							ref={name}
							type="text"
							placeholder="Name"
							className="bg-slate-400 w-full mx-auto my-2 p-4 text-black bg-opacity-80 placeholder-gray-700"></input>
					)}
					{
						<input
							ref={phone}
							type="phone"
							placeholder="Phone"
							className="bg-slate-400 w-full mx-auto  my-2 p-4  text-black bg-opacity-80 placeholder-gray-700"></input>
					}

					{!isRegisterd && (
						<input
							ref={email}
							type="email"
							placeholder="Email"
							className="bg-slate-400 w-full mx-auto  my-2 p-4 placeholder-gray-700  bg-opacity-80"></input>
					)}

					<input
						ref={password}
						type="password"
						placeholder="Password"
						className="bg-slate-400 w-full mx-auto  my-2 p-4  text-white bg-opacity-80 placeholder-gray-700"></input>

					<button className="bg-zinc-400 my-2 p-2 w-full" onClick={validateForm}>
						{isRegisterd ? 'Continue' : 'Sign Up'}
					</button>

					<p className="">{errmsg}</p>

					{isRegisterd && (
						<p className="font-semibold text-center p-2">Forgot Password?</p>
					)}
					<div>
						{isRegisterd ? (
							<div className=" p-4 mt-[10px]">
								<span className="font-semibold">New to Food Darzi ?</span>{' '}
								<span className="font-bold" onClick={toggleForm}>
									{' '}
									Sign up now
								</span>
							</div>
						) : (
							<div className=" p-4 mt-[50px]">
								<span>Already Registered ? </span>
								<span className="font-bold" onClick={toggleForm}>
									Sign In
								</span>
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
