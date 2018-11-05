import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Navigation extends Component {
    render() {
        return (
            <div class="nav-scroller py-1 mb-2">
                <nav class="nav d-flex justify-content-between">
                    <Link class="p-2 text-muted" to="/">Home</Link>
                    <Link class="p-2 text-muted" to="/user">User</Link>
                    <Link class="p-2 text-muted" to="/about">About</Link>
                    <Link class="p-2 text-muted" to="/not-found">404 Page</Link>

                    { this.props.article_id && 
                        <Link class="p-2 text-muted" to={`/${this.props.article_slug}`}>Last Viewed Article #{this.props.article_id}</Link>
                    }
                </nav>
            </div>
        );
    }
};

export default connect(state => {
    const article = state.article || {};
  
    return {
      article_id: article.id || null,
      article_slug: article.slug || null,
    }
})(Navigation);
