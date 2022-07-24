import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { RichText } from "prismic-reactjs";
import styled from 'styled-components';


const Testimonials = (props) => {

 

  return (
    <StaticQuery
      query={graphql`
        query QueryTestimonials {
          allPrismicTestimonial {
            edges {
              node {
                uid
                data {
                  page_title
                  testimonial_image {
                    alt
                    fluid(maxWidth: 400) {
                      src
                    }
                  }
                  company {
                    text
                  }
                  job_title {
                    text
                  }
                  meta_description
                  page_title
                  testimonial_text {
                    richText
                    raw
                  }
                  testimonial_title {
                    text
                  }
                  name {
                    text
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const testimonialData = data.allPrismicTestimonial.edges;

        return (
          <div>
            {testimonialData.map((testimonial, index) => {
              const item = testimonial.node;

              return (
                <TestimonialWrapper
                  style={{
                    backgroundColor: index % 2 ? "rgba(0,0,0,.04)" : "",
                    padding:'3rem'
                  }}
                >
                  <StyledTestimonial>
                    <h2>{item.data.company.text}</h2>
                    <h3></h3>

                    <RichText render={item.data.testimonial_text.raw} />
                  </StyledTestimonial>
                  <StyledImage
                    style={{
                      order: index % 2 ? "0" : "-1",
                    }}
                  >
                    <img
                      src={item.data.testimonial_image.fluid.src}
                      alt={item.data.testimonial_image.alt}
                    />
                    <caption>
                      {item.data.name.text} - {item.data.job_title.text}
                    </caption>
                  </StyledImage>
                </TestimonialWrapper>
              );
            })}
          </div>
        );
      }}
    />
  );
}

export default Testimonials

const TestimonialWrapper = styled.section`
  display:flex;
  gap:30px;
  margin-bottom:20px;
 


`


const StyledTestimonial = styled.div`
  

`;
const StyledImage = styled.div`
  caption {
    display:block;
    padding:1em;
  }
`;