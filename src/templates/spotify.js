import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SpotifyList from '../components/SpotifyList'
import SpotifyCard from '../components/SpotifyCard'
import Hero from '../components/Hero'
import Helmet from 'react-helmet'
import PageBody from '../components/PageBody'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Spotify = ({ data, pageContext }) => {
  const spotify = data.allContentfulSpotifyPlaylist.edges
  
  const homepage = data.allContentfulPage.edges
  const homepagePost = homepage[0].node
  
  return (
    <Layout>
      <SEO />
        <Helmet>
          <title>{`${config.siteTitle}`}</title>
        </Helmet>
      <Hero title="Spotify Playlists" image={homepagePost.images[0]} height={'25vh'} />
      
      <Container>
        <SpotifyList>
          {spotify.map(({ node: spot }) => (
            <SpotifyCard key={spot.id} {...spot} />
          ))}
        </SpotifyList>
      </Container>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulSpotifyPlaylist(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          imageField
          publishDate(formatString: "MMMM DD, YYYY")
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 12280)
            }
          }
        }
      }
    }
    allContentfulPage(
      filter: {slug:{eq: "welcome"}}
    ){
      edges {
        node {
          title
          slug
          images {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default Spotify
