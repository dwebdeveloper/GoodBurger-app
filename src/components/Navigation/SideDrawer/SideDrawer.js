import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import '../SideDrawer/SideDrawer.css';

const sideDrawer = (props) => {
    return (
        <div className='SideDrawer'>
            <Logo height='11%' marginBottom='32px' />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;