import React, { Component } from 'react';
import {connect} from 'react-redux';
import SubscribeModal from './modal/subscribe';
import LoginModal from './modal/login';

class Global extends Component {
    render() {
        return (
            <div>
                {this.props.display_subscribe_modal && 
                    <SubscribeModal />}

                {this.props.display_login_modal && 
                    <LoginModal />}

                {this.props.display_modal_overlay &&
                    <div class="modal-backdrop fade show"></div>}
            </div>
        );
    }
};

export default connect(state => {
    const flag = state.flag || {};

    return {
        display_subscribe_modal: flag.subscribe_modal || false,
        display_login_modal: flag.login_modal || false,
        display_modal_overlay: flag.modal_overlay || false,
    };
})(Global);
