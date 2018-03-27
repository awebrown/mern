import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Payment from './Payments';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
      return (<li>Still loading...</li>);
      case false:
      return (<li><a href="/auth/google">SIGN IN</a></li>);
      default:
       return [
         <li key="1"><Payment /></li>,
         <li key="2" style={{ margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
         <li key="3"><a href="/api/logout">LOG OUT</a></li>
       ];
     }
   }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to={this.props.auth ? '/surveys/' : '/'} className="brand-logo">LOGO</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Header)
