import React, { Component } from 'react';
import Frag from '../../hoc/Frag';
class BurgerBuilder extends Component {
    render() {
        return (
            <Frag>
                <div>Burger</div>
                <div>Build Controls</div>
            </Frag>
        );
    }
}

export default BurgerBuilder;
