import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'

const FaqTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulFaqs
  const postNode = data.contentfulFaqs

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} height={'10vh'} />
      <Container>
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulFaqs(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
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

export default FaqTemplate
