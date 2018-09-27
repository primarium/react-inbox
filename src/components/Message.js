import React from 'react';

export default function Message({ message }) {
    let className = 'message'
    return (
        <div className={className}>
            {message.subject}
        </div>
    )
}