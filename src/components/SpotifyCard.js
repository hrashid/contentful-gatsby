import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 100%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 100%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
  }
`

const Left = styled.div`
  flex: '0 0 30%';
  img{
    max-width:150px;
  }
`

const Right = styled.div`
  flex: '0 0 70%';
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Body = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const SpotifyCard = ({ slug, title, body, imageField, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/playlists/${slug}/`}>
        <Left><img src={imageField} width="100px" height="100px"/></Left>
        <Right>
          <Title>{title}</Title>
          <Body></Body>
        </Right>
      </Link>
    </Post>
  )
}

export default SpotifyCard
