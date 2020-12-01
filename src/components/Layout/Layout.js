import React, { Component } from 'react';
import Frag from '../../hoc/Frag';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerClosed = () => {
        this.setState({ showSideDrawer: false });
    };

    drawerMenuClicked = () => {
        this.setState({
            showSideDrawer: true
        })

    };

    render() {
        return (
            <Frag>
                <Toolbar clicked={this.drawerMenuClicked}>
                    this.props.children
                </Toolbar>
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerClosed} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Frag>

        );
    }

}

export default Layout;
