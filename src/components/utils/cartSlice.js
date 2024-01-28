import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: ['Burger', 'Pizza'] //adding some dummy items
	},
	reducers: {
		//reducer functions are written here corresponding to each action
		//    actions ==> basically are kind of apis to communicate to redux store for e.g add item, remove item, empty cart
		// basically addItem is the dispatched action on clicking add on the item ==> which calls the reducer function to modify the cart slice
		//reducer function get access to two parameters state and action => state is initial state and it modigy the state on the basis of action

		addItem: (state, action) => {
			state.items.push(action.payload)
			//we are mutating the state here
		},
		removeItem: (state, action) => {
			state.items.pop()
		},
		clearCart: state => {
			state.items.length = 0
		}
	}
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
