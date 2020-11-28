import React from 'react';
import '../Modal/Modal.css';
import Frag from '../../../hoc/Frag';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Frag>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className='Modal'
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>

            {props.children}
        </div>
    </Frag>

);

export default modal;