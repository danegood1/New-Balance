import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm px-sm-5 mb-3">
          <Link to="/">
            <img
              height="40"
              src="img/logo.png"
              alt="store"
              className="navbar-brand"
            />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link text-secondary">
                NEW BALANCE
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="ml-3 mr-3">
                <i className="fas fa-shopping-bag" />
              </span>
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 1px 1px #eee;
  .nav-link {
    color: var(--mainRed) !important;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.9rem;
    text-transform: capitalize;
  }
`;
