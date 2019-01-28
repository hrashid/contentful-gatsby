import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  .tracklist-table-row {
    line-height: 30px;
    display: flex;
    font-size: 13px;
    color: #697f95;
    border-bottom: 1px solid #ebf0f2;
	}
	.tracklist-table-row-number {
    width: 7%;
    padding-left: 8px;
	}
	.tracklist-table-row-song {
    width: 45%;
    padding-left: 8px;
	}
	.tracklist-table-row-artist {
    width: 45%;
    padding-left: 8px;
	}
	.tracklist-table-row-buy {
    text-align: center;
    width: 1%;
    line-height: 26px;
    padding: 0 8px;
	}

`
const Tracklist = ({ tracklist, ...props }) => {
  return (
    <Body
      	dangerouslySetInnerHTML={{ __html: tracklist.childMarkdownRemark.html }}
    	/>       
  )
}

export default Tracklist
