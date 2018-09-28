import React from 'react';
import Message from './Message.container';

export default function MessageList({ messages }) {
    return (
        <div>
            {messages.map(m => <div key={m.id}><Message message={m} /></div>)}
        </div>
    )
}