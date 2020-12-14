import React, { Component } from 'react';
import '../Modal/Modal.css';
import Frag from '../../../hoc/Frag';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate() {
        console.log('[Modal] WillUpdate');
    }
    render() {

        return (
            <Frag>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className='Modal'
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>

                    {this.props.children}
                </div>
            </Frag>
        )
    }
}

export default Modal;