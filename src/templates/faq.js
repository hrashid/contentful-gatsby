import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FaqList from '../components/FaqList'
import FaqCard from '../components/FaqCard'
import Hero from '../components/Hero'
import Helmet from 'react-helmet'
import PageBody from '../components/PageBody'
import Container from '../components/Container'
import GoogleMap from '../components/GoogleMap'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Faq = ({ data, pageContext }) => {
  const posts = data.allContentfulFaqs.edges
  
  const homepage = data.allContentfulPage.edges
  const homepagePost = homepage[0].node
  
  return (
    <Layout>
      <SEO />
        <Helmet>
          <title>{`${config.siteTitle}`}</title>
        </Helmet>
      <Hero title="FAQ" image={homepagePost.images[0]} height={'25vh'} />
      
      <Container>
        <FaqList>
          {posts.map(({ node: post }) => (
            <FaqCard key={post.id} {...post} />
          ))}
        </FaqList>
      </Container>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulFaqs(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
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

export default Faq
