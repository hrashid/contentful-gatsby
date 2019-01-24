import React from 'react'

const MixEmbed = ({ mixcloudSlug, ...props }) => {
  return (
    <div>
      <iframe width='100%' height='60' src={"https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fdj-zaki%2F" + mixcloudSlug + "%2F"} frameborder='0' ></iframe>    
    </div>        
  )
}

export default MixEmbed
