import React from 'react';

export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: '#000',
                borderRadius: '50%',
                right: '10px',
                zIndex: 1,
            }}
            onClick={onClick}
        />
    );
};

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: '#000',
                borderRadius: '50%',
                left: '10px',
                zIndex: 1,
            }}
            onClick={onClick}
        />
    );
};