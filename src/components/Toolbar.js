import React from 'react';

export default function Toolbar({ totalMessages, unreadMessages, selectedMessages, onSelectAll, onMarkAsRead, onMarkAsUnread, onDelete, onApplyLabel, onRemoveLabel }) {
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
            <button id="markAsReadButton" className="btn btn-default" onClick={onMarkAsRead}  >
                Mark As Read
            </button>
            <button id="markAsUnreadButton" className="btn btn-default" onClick={onMarkAsUnread}  >
                Mark As Unread
            </button>
            <select id="applyLabelDropdown" className="form-control label-select" value={0} onChange={(e) => onApplyLabel(e.target.value)}>
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
            </select>
            <select id="removeLabelDropdown" className="form-control label-select" value={0} onChange={(e) => onRemoveLabel(e.target.value)}>
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
            </select>
            <button id="deleteButton" className="btn btn-default" onClick={onDelete}  >
                <i className="fa fa-trash-o"></i>
            </button>
        </div>
    )
}

