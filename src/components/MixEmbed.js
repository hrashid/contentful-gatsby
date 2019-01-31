import React from 'react'
import styled from 'styled-components'

const MixFrame = styled.div`
	margin: 0 auto 30px;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`
const MixEmbed = ({ mixcloudSlug, ...props }) => {
  return (
    <MixFrame>
      <iframe width='100%' height='120' src={"https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdj-zaki%2F" + mixcloudSlug + "%2F"} frameborder="0" ></iframe>
    </MixFrame>        
  )
}

export default MixEmbed
