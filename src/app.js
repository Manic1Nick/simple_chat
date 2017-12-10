import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Chat from './chat'
import rootReducers from './reducers'
import { addNewUser } from './actions'

//-----------------------------------------

const loggerMiddleware = (store) => {
	return (next) => {
		return (action) => {
			console.log('trigger', action)
			let result = next(action)
			console.log('store after action', store.getState())
			return result
		}
	}
}

const checkUserMW = store => next => action => {
	switch(action.type) {
		case 'CONNECT_NEW_USER':
			let fakeRequest = () => new Promise(resolve => {
				setTimeout(() => {
					resolve()
				}, 2500)
			})
			fakeRequest().then(() => {
				store.dispatch(addNewUser())
			})
	}

	return next(action)
}

const store = createStore(
	rootReducers, 
	applyMiddleware(loggerMiddleware, checkUserMW)
)

window.store = store

/*store.subscribe(() => {
	console.debug('store has been changed!');
})*/
//-----------------------------------------

export default class App extends Component {
	render() {
		return (
			<Provider store={store} >
				<div>
					<Chat />
				</div>				
			</Provider>
		)
	}
}