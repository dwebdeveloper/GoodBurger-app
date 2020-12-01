import React from 'react';
import '../ToggleButton/ToggleButton.css'

const toggleButton = (props) => (
    <div className='ToggleButton' onClick={props.clicked}>Menu</div>
);

export default toggleButton;