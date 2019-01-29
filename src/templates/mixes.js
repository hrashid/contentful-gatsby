import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Mix from '../components/Mix'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Mixes = ({ data, pageContext }) => {
  const posts = data.allContentfulMixtape.edges
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
      <Container>
        {isFirstPage ? (
          <CardList>
            <Mix {...featuredPost} featured />
            {posts.slice(1).map(({ node: post }) => (
              <Mix key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Mix key={post.id} {...post} />
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulMixtape(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
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
  }
`

export default Mixes
