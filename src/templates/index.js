import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import GoogleMap from '../components/GoogleMap'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  const homepage = data.allContentfulPage.edges
  const homepagePost = homepage[0].node
  
  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}

      <Hero title="Dj Zaki" image={homepagePost.images[0]} height={'75vh'} />
      <section className="container">
        <div dangerouslySetInnerHTML={{ __html: homepagePost.body.childMarkdownRemark.html }}/>
      </section>

      <Container>

        {isFirstPage ? (
          <CardList>
            <Card {...featuredPost} featured />
            {posts.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    <GoogleMap />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
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
