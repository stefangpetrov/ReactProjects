import React from 'react';
import '../styles/MyStyles.css'

export default function StyleSheet( props ) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className = {className}>
                StyleSheet
            </h1>
        </div>
    )
}
