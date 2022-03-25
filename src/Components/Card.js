
import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            <svg width="400" height="180">
                <rect x = "50%" width={100} height = {100} className = "rectang"/>
            </svg>
        );

    };
}

export default Card