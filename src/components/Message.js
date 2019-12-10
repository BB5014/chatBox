import React from 'react';

// Display message content

const Message = ({pseudo, message}) => {
    return (
        <p className="user-message">{message}</p>
    )
}

export default Message;