import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PlayList from '../components/PlayList'
import NewsPostLinks from '../components/NewsPostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'
import styled from 'styled-components'

const PostTitle = styled.div`
  margin: 0 auto 30px;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  font-size:1.5em;
  font-weight:600;
`

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
    playlist,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero  title={`${title}`} image={heroImage} height={'50vh'} />

      <Container>
        <PostTitle>{title}</PostTitle>
        <PostDate date={publishDate} />
        <PageBody body={body} />
        {playlist && <PlayList playlist={playlist} />}
        {tags && <TagList tags={tags} />}
        <NewsPostLinks previous={previous} next={next} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      playlist {
        id
        name
        artist
      }
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
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
