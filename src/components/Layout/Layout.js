import React from 'react';
import Frag from '../../hoc/Frag';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Frag>
        <Toolbar />
        <main className='Content'>
            {props.children}
        </main>
    </Frag>

);

export default layout;
