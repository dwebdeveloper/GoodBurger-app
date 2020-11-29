import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import '../Logo/Logo.css';

const logo = (props) => (
    <div className='Logo' style={{ height: props.height }}>
        <img src={burgerLogo} alt='Unique Burger' />
    </div>
);

export default logo;