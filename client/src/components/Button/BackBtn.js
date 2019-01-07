import React from 'react'

export const BackBtn = ({backURL}) => (
    <a href={`${backURL}`}>
        <div className="wrap-btn back-btn">
            <i className="material-icons btn-icon">arrow_back_ios</i>
        </div>
    </a>
)