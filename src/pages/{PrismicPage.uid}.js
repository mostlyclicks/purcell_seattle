import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo.js'
import { RichText } from "prismic-reactjs"
import Testimonials from "../components/testimonials"

const PrismicPage = ({data}) => {

  const pageData = data.prismicPage.data

  return (
    <Layout>
      <SEO title={pageData.page_title} description={pageData.meta_description} />
      <h1>{pageData.title.text}</h1>
      {RichText.render(pageData.content.raw)}
      
      {data.prismicPage.uid === "what-people-say" && <Testimonials />}

    </Layout>
  );
}

export default PrismicPage

export const PageQuery = graphql`
  query PrismicPage($uid: String) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        page_title
        meta_description
        title {
          text
        }
        content {
          raw
        }
      }
    }
  }
`;