import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        Copyright © 2019 DJ Zaki{' '}
      </Item>
      <Item>
        <a
          href="/sitemap"
        >
          Sitemap
        </a>{' | '}
        <a
          href="https://twitter.com/_djzaki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' | '}
        <a
          href="https://instagram.com/_djzaki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        {' | '}
        <a
          href="https://www.yelp.com/biz/los-angeles-dj-zaki-los-angeles"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yelp
        </a>
        {' | '}
        <a
          href="https://goo.gl/maps/5D1BQPo2SPQ2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
