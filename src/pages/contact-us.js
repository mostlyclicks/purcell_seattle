import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import styled from 'styled-components'

const ContactUs = () => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="If you are in need of marketing, communications or advertising service, please feel free to contact us."
      />
      <h1>Contact Us</h1>
      <FormWrapper>
        <FormText>
          <p>
            If you are in need of marketing, communications or advertising
            service, please feel free to contact us.
          </p>
        </FormText>
        <FormDiv>
          <form name="contact" netlify>
            <p>
              <label>
                Name
                <br />
                <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email
                <br />
                <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <br />
                <textarea name="message" rows="6" columns="80"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </FormDiv>
      </FormWrapper>
    </Layout>
  );
}

export default ContactUs

const FormWrapper = styled.div`
  display:flex;
  flex-direction:column;
  padding:30px;
  gap:40px;
  @media (min-width: 768px) {
    flex-direction:row;
  }
`

const FormText = styled.div`
  flex-shrink: 1;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const FormDiv = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
  input,
  textarea {
    width: 90%;
  }
  input[type="text"],
  input[type="email"] {
    font-size: 24px;
  }
  textarea {
    font-size: 24px;
  }
  button {
    background-color: #f5ad76;
    border: none;
    padding: 1rem 2rem;
    font-size: 16px;
    border-radius: 5px;

    &:hover {
      background-color: #f48026;
    }
  }
`;