import { combineReducers } from 'redux'

const activeUserState = ''
const usersState = ['@alex', '@nick', '@sergey']
const messagesState = [
	{
		text: 'Hello World!',
		datetime: Date.now(),
		author: '@alex'
	},
	{
		text: 'Hi, friend! How are you?',
		datetime: Date.now() + 1000000,
		author: '@nick'
	}
]

const usersReducer = (state = usersState, action) => {
	switch(action.type) {
		case 'ADD_NEW_USER':
			let users = state.slice()
			users.unshift(action.username)
			return users
	}
	return state
}

const messagesReducer = (state = messagesState, action) => {
	switch(action.type) {
		case 'ADD_NEW_MESSAGE':
			let messages = state.slice()
			messages.unshift({
				datetime: action.datetime,
				author: action.author,
				text: action.text
			})
			return messages
	}
	return state
}

const activeUserReducer = (state = activeUserState, action) => {
	let activeUser = state.slice()

	switch(action.type) {
		case 'ACTIVATE_USER':
			activeUser = action.username
			return activeUser
	}
	return state
}

export default combineReducers({
	usersReducer, 
	messagesReducer,
	activeUserReducer
})