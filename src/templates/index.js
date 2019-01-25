import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Mix from '../components/Mix'
import Hero from '../components/Hero'
import Helmet from 'react-helmet'
import PageBody from '../components/PageBody'
import Container from '../components/Container'
import GoogleMap from '../components/GoogleMap'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulMixtape.edges
  const homepage = data.allContentfulPage.edges
  const homepagePost = homepage[0].node

  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
        {!isFirstPage && (
          <Helmet>
            <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
          </Helmet>
        )}
      <Hero title="Dj Zaki" image={homepagePost.images[0]} height={'75vh'} />
      <PageBody body={homepagePost.body} />
      <Container>
        <CardList>
            {posts.map(({ node: post }) => (
              <Mix key={post.id} {...post} />
            ))}
          </CardList>
      </Container>
      
    <GoogleMap />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!) {
    allContentfulMixtape(
      sort: { fields: [publishDate], order: DESC }
      limit: 3
      skip: $skip

    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
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
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default Index
