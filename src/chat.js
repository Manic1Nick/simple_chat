import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Users from './users'
import Messages from './messages'
import { addNewUser, addNewMessage, activateUser } from './actions'
import './assets/styles/style.scss'

class Chat extends Component {
	render() {
		return (
			<main className='main-wrapper'>
				<Messages 
					messages={this.props.messages}
					addNewMessage={this.props.addNewMessage}
					activeUser={this.props.activeUser}
					registerName={this._registerActiveUser.bind(this)}
					exitUser={this._clearActiveUser.bind(this)}
				/>
				<Users 
					users={this.props.users} 
					addNewUser={this.props.addNewUser}
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
		activeUser: state.activeUserReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewUser: bindActionCreators(addNewUser, dispatch),
		addNewMessage: bindActionCreators(addNewMessage, dispatch),
		activateUser: bindActionCreators(activateUser, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)