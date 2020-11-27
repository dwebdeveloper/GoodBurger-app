import React from 'react';
import Frag from '../../hoc/Frag';
import './Layout.css';

const layout = (props) => (
    <Frag>
        <div>ToolBar, SideDrawer, Backdrop</div>
        <main className='Content'>
            {props.children}
        </main>
    </Frag>

);

export default layout;
