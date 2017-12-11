import React, { Component } from 'react'
import './assets/styles/style.scss'

class UsersList extends Component {
	render() {
		const { users, activeUser, addNewUser, selectUser } = this.props

		return (
			<div className='users'>
				<h3 className='users__title'>Online users:</h3>
				<button onClick={() => addNewUser()}>
					Add new random user
				</button>
				<ul>
					{
						users.map((user, idx) => {
							if (user === activeUser) {
								return <li key={idx} style={{ color: 'blue' }}>{user} - you</li>
							}
							return <li key={idx} onClick={() => selectUser(user)} >{user}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

export default UsersList