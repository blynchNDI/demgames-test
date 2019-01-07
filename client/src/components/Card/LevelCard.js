import React from 'react';

export const LevelCard = ({level, href, textBg, title}) => (
    <div className={`card level-card text-center ${level}`}>
        <a className={`card-text`} href={href}>
            <b>{title}</b>
        </a>
    </div>
);