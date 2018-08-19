import React from 'react'
import { connect } from 'react-redux'

class User extends React.PureComponent {
  render() {
    return (
      <div className='user'>
        User page
      </div>
    );
  }
};

export default connect(state => ({
  
}))(User);