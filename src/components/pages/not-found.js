import React from 'react'
import { connect } from 'react-redux'

class NotFound extends React.PureComponent {
  render() {
    return (
      <div className='notFound'>
        404 : Page not found
      </div>
    );
  }
};

export default connect()(NotFound);