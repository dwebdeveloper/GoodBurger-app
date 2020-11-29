import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import '../Logo/Logo.css';

const logo = (props) => (
    <div className='Logo' style={{ height: props.height, marginBottom: props.marginBottom }}>
        <img src={burgerLogo} alt='Unique Burger' />
    </div>
);

export default logo;