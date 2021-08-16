import React from 'react';

const Avatar = ( {img, fullname}) => {
    return (
        <img src={img} alt={`${fullname} avatar`}/>
    );
};

export default Avatar;