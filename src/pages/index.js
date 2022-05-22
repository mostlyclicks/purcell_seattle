import * as React from "react"
import { graphql } from 'gatsby'
import SEO from '../components/seo.js'
import { RichText } from "prismic-reactjs";
import Layout from '../components/layout'

const IndexPage = ({data}) => {

  const HomeData = data.allPrismicHomepage.edges[0].node.data

  return (
    <Layout>
      <SEO title={HomeData.page_title} description={HomeData.meta_description} />
      <h1>{HomeData.title.text}</h1>
      {RichText.render(HomeData.body_content.raw)}
    </Layout>
  )
}

export default IndexPage

export const HomePageQuery = graphql`
  query {
    allPrismicHomepage {
      edges {
        node {
          data {
            page_title
            meta_description
            body_content {
              raw
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`;