import React from 'react';
import '../Toolbar/Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton';

const toolbar = (props) => (
    <header className='Toolbar'>
        <ToggleButton clicked={props.clicked} />
        <Logo height='80%' />
        <nav className='DesktopOnly' >
            <NavigationItems />
        </nav>
    </header>

);

export default toolbar;