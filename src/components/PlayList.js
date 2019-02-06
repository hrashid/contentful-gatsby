import React from 'react'
import styled from 'styled-components'

const PList = styled.div`
  width: 100%;
  margin: 2em auto 1em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Item = styled.div`
  line-height: 24px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 11px;
  border-bottom: 1px solid #EEE;
`

const Artist = styled.div`
  width: 40%;
`

const Name = styled.div`
  width: 60%;
  padding-left: 8px;
`


const PlayList = props => {
  return (
    <PList>
      {props.playlist.map(tag => (
        <Item key={tag.id}>
          <Artist>{tag.artist}</Artist><Name>{tag.name}</Name> 
        </Item>
      ))}
    </PList>
  )
}

export default PlayList
