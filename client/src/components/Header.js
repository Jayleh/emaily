import M from 'materialize-css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  componentDidUpdate() {
    const elems = document.querySelector('.dropdown-trigger');
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
          <li>
            <a href="#!" className="dropdown-trigger" data-target="dropdown1">
              <i className="material-icons">account_circle</i>
            </a>
          </li>
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
