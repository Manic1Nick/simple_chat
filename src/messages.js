import React, { Component } from 'react'
import './assets/styles/style.scss'

class Messages extends Component {
	submitForm(e) {
		e.preventDefault()

		if (!this.input.value) {
			alert("You didn't enter message")
		
		} else if (!this.props.activeUser) {
			alert("You didn't enter your name")

		} else {
			this.props.addNewMessage(
				Date.now(), 
				this.props.activeUser, 
				this.input.value
			)			
		}
		this.input.value = ''
	}

	renderActiveUser() {
		const { activeUser, registerName, exitUser } = this.props

		const activeUserValue = activeUser 
			? <div>You: {activeUser} <a href='#' onClick={ exitUser } >[exit]</a></div>
			: <a href='#' onClick={ registerName } >[enter your name]</a>

		return (
			<div className='chat__activeUser' >
				{ activeUserValue }
			</div>
		)
	}

	render() {
		return (
			<div className='chat'>
				{
					this.renderActiveUser()
				}
				<form onSubmit={this.submitForm.bind(this)} action='#'>
					<input 
						ref={(input) => this.input = input} 
						type='text' 
						className='chat__input'
					/>
					{
						this.props.messages.map((message, idx) => {
							const { datetime, author, text } = message
							return (
								<p className='message' key={idx}>
									<span className='message__date'>
										{this._formatDate(datetime)}
									</span>
									<span className='message__author'>
										{author}:
									</span>
									<span className='message__text'>
										{text}
									</span>
								</p>
							)
						})
					}
				</form>
			</div>
			
				
		)
	}

	_formatDate(datetime) {
		let date = new Date(datetime)
		return `[${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:${date.getMinutes()}]`
	}
}

export default Messages