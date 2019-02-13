import React from 'react'
import styled from 'styled-components'

const SpotifyFrame = styled.div`
	margin: 0 auto 30px;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`
const SpotifyEmbed = ({ contentfulid, ...props }) => {
  return (
    <SpotifyFrame>
      <iframe src={"https://open.spotify.com/embed/user/harrisrashid/playlist/" + contentfulid + ""} width="100%" height="580" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </SpotifyFrame>        
  )
}

export default SpotifyEmbed
