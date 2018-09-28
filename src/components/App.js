import React from 'react';
import '../App.css';
import MessageList from './MessageList.container';
import Toolbar from './Toolbar.container';

export default function App() {
    return (
        <div>
            <Toolbar />
            <MessageList />
        </div>
    );
}