import React, { Component } from 'react';

const baseStyle = {
    color: '#fff',
    borderRadius: '5px',
    padding: '7px 10px',
    textTransform: "capitalize"
}

const styleGuide = {
    "open": {
        ...baseStyle,
        backgroundColor: '#008000',
    },
    "close": {
        ...baseStyle,
        backgroundColor: '#FF0000',
    }
}

const StatusTag = (props) => {
    const { status } = props;

    return (
        <span style={styleGuide[status]}>{status}</span>
    )
}

export default StatusTag;