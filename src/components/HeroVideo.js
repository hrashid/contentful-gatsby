import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Vid = styled.div`
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Title = styled.span`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  position: relative;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1rem;
  
  text-align: center;
  color: white;
  text-shadow: rgba(1,1,1,1) 1px 1px 1px;
`

const HeroVideo = props => (
  <Wrapper>
    <BgImg
      height={props.height}
      fluid={props.image.fluid}
    />
    <Vid><iframe width="560" height="315" src="https://www.youtube.com/embed/hY7m5jjJ9mM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Vid>
    
    <Title>{props.title}yyy</Title>
  </Wrapper>
)

export default HeroVideo
