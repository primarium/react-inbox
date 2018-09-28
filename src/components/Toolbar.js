import React from 'react';

export default function Toolbar({ totalMessages, unreadMessages, selectedMessages, onSelectAll }) {
    let checkboxClass = 'fa '
    if (selectedMessages == 0) {
        checkboxClass += 'fa-square-o'
    } else if (selectedMessages === totalMessages) {
        checkboxClass += 'fa-check-square-o'
    } else {
        checkboxClass += 'fa-minus-square-o'
    }
    return (
        <div className="toolbar">
            <button id="selectAllButton" className="btn btn-default" onClick={onSelectAll}  >
                <i className={checkboxClass}></i>
            </button>
        </div>
    )
}