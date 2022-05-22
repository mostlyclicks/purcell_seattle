import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

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
                }
              }
            }
          }
        }
      `}
      render={(data) => {

        const testimonialData = data.allPrismicTestimonial.edges

        return (
          <div>
            {testimonialData.map((testimonial) => {

              const item = testimonial.node

              return <p>{item.data.page_title} {item.uid}</p>;
            })}
          </div>
        );

      }}
    />
  );
}

export default Testimonials
