import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Users from './users'
import Messages from './messages'
import { addNewUser, addNewMessage, activateUser, selectUser } from './actions'
import './assets/styles/style.scss'

class Chat extends Component {
	render() {
		const { 
			messages, 
			users, 
			addNewMessage, 
			addNewUser, 
			activeUser, 
			selectUser, 
			selectedUser 
		} = this.props

		return (
			<main className='main-wrapper'>
				<Messages 
					messages={ messages }
					addNewMessage={ addNewMessage }
					activeUser={ activeUser }
					registerName={this._registerActiveUser.bind(this)}
					exitUser={this._clearActiveUser.bind(this)}
					sendTo={ selectedUser }
					sendToAll={ selectUser }
				/>
				<Users 
					users={ users } 
					addNewUser={ addNewUser }
					activeUser={ activeUser }
					selectUser={ selectUser }
				/>
			</main>
		)
	}

	_registerActiveUser() {
		let newUser = prompt("Enter your name")
		if (!newUser) return

		newUser = `@${newUser}`
		if (!this.props.users.includes(newUser)) { 
			this.props.addNewUser(newUser) 
		}
		this.props.activateUser(newUser)
	}

	_clearActiveUser() {
		this.props.activateUser('')
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersReducer,
		messages: state.messagesReducer,
		activeUser: state.activeUserReducer,
		selectedUser: state.selectUserReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewUser: bindActionCreators(addNewUser, dispatch),
		addNewMessage: bindActionCreators(addNewMessage, dispatch),
		activateUser: bindActionCreators(activateUser, dispatch),
		selectUser: bindActionCreators(selectUser, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)