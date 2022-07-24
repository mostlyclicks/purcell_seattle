import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Testimonials = () => {

 

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
                    fluid(maxHeight: 400) {
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
                    text
                  }
                  testimonial_title {
                    richText
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
            {testimonialData.map((testimonial) => {
              const item = testimonial.node;
              const image = getImage(item.data.testimonial_image.fluid.src);

              return (
                <div>
                  <h1>{item.data.page_title}</h1>

                  <img
                    src={item.data.testimonial_image.fluid.src}
                    alt={item.data.testimonial_image.alt}
                  />
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
}

export default Testimonials
