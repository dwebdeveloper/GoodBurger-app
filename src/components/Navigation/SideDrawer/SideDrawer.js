import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import '../SideDrawer/SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Frag from '../../../hoc/Frag';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }



    return (
        <Frag>
            <Backdrop show={props.open} clicked={props.close} />

            <div className={attachedClasses.join(' ')}>

                <Logo height='11%' marginBottom='32px' />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Frag >

    );
};

export default sideDrawer;