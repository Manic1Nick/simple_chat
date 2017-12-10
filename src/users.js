import React, { Component } from 'react'
import './assets/styles/style.scss'

class UsersList extends Component {
	render() {
		return (
			<div className='users'>
				<h3 className='users__title'>Online users:</h3>
				<button onClick={this.props.addNewUser}>
					Add new user
				</button>
				<ul>
					{
						this.props.users.map((user, idx) => {
							return <li key={idx}>{user}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

export default UsersList