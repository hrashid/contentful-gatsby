import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import MixEmbed from '../components/MixEmbed'
import MixHero from '../components/MixHero'
import Container from '../components/Container'
import Tracklist from '../components/Tracklist'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'
import styled from 'styled-components'

const MixTitle = styled.div`
  margin: 0 auto 30px;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  font-size:1.5em;
  font-weight:600;
`

const MixTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
    mixcloudSlug,
    tracklist,
  } = data.contentfulMixtape
  const postNode = data.contentfulMixtape

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />
      <MixHero  title={`${title}`} image={heroImage} height={'20vh'} />
      <Container>
        <MixTitle>{title}</MixTitle>

        <MixEmbed mixcloudSlug={mixcloudSlug}/>
        <PageBody body={body} />
        <Tracklist tracklist={tracklist} />
        {tags && <TagList tags={tags} />}
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulMixtape(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      mixcloudSlug
      tags {
        title
        id
        slug
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
      tracklist{
        childMarkdownRemark {
          html
        }
      } 
    }
  }
`

export default MixTemplate
