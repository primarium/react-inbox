import React from 'react';
import Message from './Message.container';

export default function MessageList({ messages }) {
    return (
        <ul>
            {messages.map(m => <li key={m.id}><Message message={m} /></li>)}
        </ul>
    )
}