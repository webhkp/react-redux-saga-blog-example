import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
          <footer>
            <hr />
            
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </footer>
        );
    }
};
