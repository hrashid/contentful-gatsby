import React from 'react'
import Img from 'gatsby-image'
import Vide from "../../static/videos/welcome.mp4"
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`

const VidWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: block;
`

const Video = styled.video`
@media (max-width: ${props => props.theme.responsive.small}) {
  display:none;
}
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
    display:none;
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

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: rgba(1,1,1,1) 1px 1px 1px;
`

const HomeHero = props => (
  <Wrapper>
    <VidWrapper>
      <Video Controls autoPlay loop muted width="100%">
        <source src={Vide} type="video/mp4" />
      </Video>
      <BgImg
        height={props.height}
        fluid={props.image.fluid}
        alt={props.image.title}
      />
      <Title>{props.title}</Title>

    </VidWrapper>
     
  </Wrapper>
)

export default HomeHero
