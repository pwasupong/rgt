import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { fetchMessage } from '../../actions/auth';

class Home extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        Home <Link to="/forum">forum</Link> { this.props.message }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, { fetchMessage })(Home);
