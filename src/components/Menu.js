import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    line-height:30px;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
  img{
    max-height:25px;
    width:auto;
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              <img src="/logos/dj-zaki-los-angeles-logo.png" alt="DJ Zaki Los Angeles DJ"/>
            </Link>
          </li>
                 
          <li>
            <Link to="/los-angeles-dj" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>

          <li>
            <Link to="/mixes" activeStyle={activeLinkStyle}>
              Mixes
            </Link>
          </li>

          <li>
            <Link to="/news" activeStyle={activeLinkStyle}>
              News
            </Link>
          </li>
          <li>
            <Link to="/faq" activeStyle={activeLinkStyle}>
              FAQ
            </Link>
          </li>

          <li>
            <Link to="/contact" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
