import M from 'materialize-css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  componentDidUpdate() {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li>
              <Payments />
            </li>
            <li style={{ margin: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="#!" className="dropdown-trigger" data-target="dropdown1">
                <i className="material-icons">account_circle</i>
              </a>
            </li>
          </React.Fragment>
        );
    }
  }

  renderDropdownMenu() {
    if (this.props.auth) {
      return (
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to="/surveys">Dashboard</Link>
          </li>
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderDropdownMenu()}
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="left brand-logo">
              Emailist
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
