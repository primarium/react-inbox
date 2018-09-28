import React from 'react';

export default function Message({ message }) {
    const starredClass = message.starred ? 'fa-star' : 'fa-star-o'
    let className = 'row message ' + (message.read ? 'read' : 'unread')
    let checkbox
    if (message.selected) {
        checkbox = <input type="checkbox" checked="checked" />
        className += ' selected'
    } else {
        checkbox = <input type="checkbox" />
    }
    return (
        <div className={className}>
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        {checkbox}
                    </div>
                    <div className="col-xs-2">
                        <i className={`star fa ${starredClass}`}></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11">
                {message.labels.map((label, index) => <span key={index} className="label label-warning">{label}</span>)}
                <a href="#">
                    {message.subject}
                </a>
            </div>
        </div>
    )
}

