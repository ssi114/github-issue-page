import React, { Component } from 'react';

const styleGuide = {
    maxHeight: "25px",
    borderRadius: '50%',
    paddingRight : '5px'
}

const UserTag = (props) => {
    const { user: { login, avatar_url } } = props;

    return (
        <span><img src={avatar_url} alt={login} style={styleGuide} />{login}</span>
    )
}

export default UserTag;