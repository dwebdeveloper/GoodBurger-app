import React from 'react';
import Frag from '../../hoc/Frag';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Frag>
        <Toolbar />
        <SideDrawer />
        <main className='Content'>
            {props.children}
        </main>
    </Frag>

);

export default layout;
