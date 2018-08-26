import React from 'react'
import { connect } from 'react-redux'

class About extends React.PureComponent {
  render() {
    return (
      <div className='user'>
        About page
      </div>
    );
  }
};

export default connect()(About);