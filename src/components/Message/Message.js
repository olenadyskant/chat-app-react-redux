import React from 'react'
import propTypes from 'prop-types'
import './Message.css'

const Message = ({message, author}) => (
	<p> 
		<i><strong>{author}</strong></i>: {message}
	</p>
	)

Message.propTypes = {
	message: propTypes.string.isRequired,
	author: propTypes.string.isRequired
}

export default Message