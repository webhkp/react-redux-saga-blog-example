import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginModal extends Component {
    render() {
        return (
          <div className="modal fade in show" tabIndex="-1" role="dialog" style={{display: 'block'}}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Login</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{
                    this.props.dispatch({
                      type: 'TOGGLE_FLAG',
                      key: 'login_modal',
                    })}}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" className="btn btn-primary">Save changes</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{
                    this.props.dispatch({
                      type: 'TOGGLE_FLAG',
                      key: 'login_modal',
                    })}}>Close</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default connect(state => {

})(LoginModal);