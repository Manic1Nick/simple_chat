import faker from 'faker'

/*export const addNewUser = (username) => {
	if (!username) username = `@${faker.internet.userName().toLowerCase()}`
	
	return {
		type: 'ADD_NEW_USER',
		username
	}		
}*/

export const addNewUser = (username) => {
	if (!username) username = `@${faker.internet.userName().toLowerCase()}`
	
	return dispatch => {
		dispatch({
			type: 'ADD_NEW_USER',
			username
		})
		
		dispatch(addNewMessage(
			Date.now(),
			username,
			'',
			'Hello everybody :)'
		))
	}
}

export const addNewMessage = (datetime, author, recipient, text) => {
	return {
		type: 'ADD_NEW_MESSAGE',
		datetime, 
		author, 
		recipient,
		text
	}
}

export const activateUser = (username) => {
	return {
		type: 'ACTIVATE_USER',
		username
	}
}

export const selectUser = (username) => {
	return {
		type: 'SELECT_USER',
		username
	}
}