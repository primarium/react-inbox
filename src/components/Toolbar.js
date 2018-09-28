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
    const disabled = selectedMessages === 0
    return (
        <div className="toolbar">
            <div className="col-md-12">
                <p id="unreadMessages" className="pull-right">
                    <span className="badge badge">{unreadMessages} </span>
                    unread message{unreadMessages === 1 ? '' : 's'}
                </p>
                <button id="selectAllButton" className="btn btn-default" onClick={onSelectAll}>
                    <i className={checkboxClass}></i>
                </button>
                <button id="markAsReadButton" className="btn btn-default" disabled={disabled} onClick={onMarkAsRead}>
                    Mark As Read
                </button>
                <button id="markAsUnreadButton" className="btn btn-default" disabled={disabled} onClick={onMarkAsUnread}>
                    Mark As Unread
                </button>
                <select id="applyLabelDropdown" className="form-control label-select" disabled={disabled} value={0} onChange={(e) => onApplyLabel(e.target.value)}>
                    <option>Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>
                <select id="removeLabelDropdown" className="form-control label-select" disabled={disabled} value={0} onChange={(e) => onRemoveLabel(e.target.value)}>
                    <option>Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>
                <button id="deleteButton" className="btn btn-default" disabled={disabled} onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )
}

