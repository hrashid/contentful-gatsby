import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import SpotifyEmbed from '../components/SpotifyEmbed'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import styled from 'styled-components'
import SEO from '../components/SEO'

const Ques = styled.h1`
  margin: 0 auto 30px;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  font-size:1.5em;
  font-weight:600;
`

const SpotifyTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
    contentfulid,
    imageField,
  } = data.contentfulSpotifyPlaylist
  const postNode = data.contentfulSpotifyPlaylist

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Container>
        <Ques>{title}</Ques>
        <PageBody body={body} />
        <SpotifyEmbed contentfulid={contentfulid}/>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulSpotifyPlaylist(slug: { eq: $slug }) {
      title
      slug
      contentfulid
      metaDescription {
        internal {
          content
        }
      }
      imageField
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default SpotifyTemplate
