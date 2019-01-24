import React from 'react'
import styled from 'styled-components'

const Tracklist = ({ tracklist, ...props }) => {
  return (
    <div
      	dangerouslySetInnerHTML={{ __html: tracklist.childMarkdownRemark.html }}
    	/>       
  )
}

export default Tracklist
