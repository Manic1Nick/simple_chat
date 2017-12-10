import faker from 'faker'

export const addNewUser = (username) => {
	if (!username) username = `@${faker.internet.userName().toLowerCase()}`
	
	return {
		type: 'ADD_NEW_USER',
		username
	}		
}

export const addNewMessage = (datetime, author, text) => {
	return {
		type: 'ADD_NEW_MESSAGE',
		datetime, 
		author, 
		text
	}
}

export const activateUser = (username) => {
	return {
		type: 'ACTIVATE_USER',
		username
	}
}