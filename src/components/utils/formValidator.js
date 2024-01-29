import React from 'react'

const FormValidator = (isRegistered, email, phone, password) => {
	console.log(isRegistered, email, phone, password, '**********')
	const isPhoneValid = /^\+?[1-9][0-9]{7,14}$/.test(phone)
	const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
		password
	)
	if (isRegistered) {
		if (!isPhoneValid) return 'Phone Number is not Valid'
		if (!isPasswordValid) return 'Invalid Password'
		return null
	} else {
		const isEmailValid = /^\S+@\S+\.\S+$/.test(email)
		if (!isEmailValid) return 'Invalid Email'
		if (!isPhoneValid) return 'Phone Number is not Valid'
		if (!isPasswordValid) return 'Invalid Password'
		return null
	}
}

export default FormValidator
