import * as React from "react"
import { graphql } from 'gatsby'
import SEO from '../components/seo.js'
import { RichText } from "prismic-reactjs";
import Layout from '../components/layout'
import styled from 'styled-components'
import bgImg from "../images/pexels-scott-webb-136397.jpg";

const IndexPage = ({data}) => {

  const HomeData = data.allPrismicHomepage.edges[0].node.data

  return (
    <Layout>
      <SEO
        title={HomeData.page_title}
        description={HomeData.meta_description}
      />
      
      <StyledMain>
        <h1>{HomeData.title.text}</h1>
        {RichText.render(HomeData.body_content.raw)}
      </StyledMain>
      <BackgroundImage />
    </Layout>
  );
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


const StyledMain = styled.div`
  padding:30px;
  position:relative;
  z-index:10;
 
  margin-top:10rem;
  h1,p {
    color:#ffffff;
  }
  p {
    font-size:24px;
    font-weight:300;
  }
  background-color:rgba(0,0,0,.4);
`

const BackgroundImage = styled.div`
  background-color:#cdcdcd;
  background-image:url(${bgImg});
  background-size:cover;
  background-repeat:no-repeat;
  width:100%;
  height:82vh;
  position:absolute;
  top:170px;
  left:0px;
  z-index:0;
`
