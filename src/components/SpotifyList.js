import React from 'react'
import styled from 'styled-components'

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const SpotifyList = props => {
  return <List>{props.children}</List>
}

export default SpotifyList
