import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Link as LinkForScroll } from 'react-scroll';
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import arrowSvg from '../img/arrow.svg';
import dots from '../img/dot-grid-paper-100.svg';


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  subheading2,
  description,
  aboutme,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition:'top left',
        height: 'calc(100vh)',        
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '11em',
          minWidth: '400px',
        }}
      >

        <h1
          className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-weight-light is-family-secondary"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.5em',
            alignItems: 'center',
          }}
        >
          {heading}
        </h1>
        <h3
          className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-weight-light is-family-secondary"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            fontWeight: '300',
          }}
        >
          {subheading}
        </h3>
        <h3
          className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-weight-light is-family-secondary"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            fontWeight: '300',
          }}
        >
          {subheading2}
        </h3>
        <div className="hero-arrow">
        <LinkForScroll
          activeClass="active"
          to="content"
          smooth
          duration={250}
          offset={-50}
          >
          <img src={arrowSvg} alt="Scroll down" />
        </LinkForScroll>
      </div>

  </div>


  </div>
    <section className="section" >
      <div />
      <div className="container">
        <div className="section" style={{
          minHeight: '100vh',
        }}>
          <div className="content has-text-centered">
              <h3 className="title is-size-3 is-family-secondary is-centered">
                {aboutme.heading}
              </h3>
              <br/>
              {aboutme.description}
          </div>
        </div>
        <div className="section">
          <div className="columns is-mobile">
            <div className="content">
              <div className="content has-text-centered">
                <h3 className="title is-size-3 is-family-secondary is-centered" style={{
                  marginBottom: "1rem",
                }}>
                  {intro.heading}
                </h3>
                <hr style={{
                    height: "2px",
                    width: "10em",
                    marginBottom: "2rem",
                  }}/>
                <p>{description}</p>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns is-mobile">
                <div className="column"/>
                <div className="column is-three-quarters">
                  <div className="container has-text-centered">
                    <h3 className="title is-size-3 is-family-secondary is-centered" style={{
                        marginTop: "8rem",
                        marginBottom: "1rem",
                      }}>
                      Latest stories
                    </h3>
                    <hr style={{
                      height: "2px",
                      width: "16em",
                      marginBottom: "2rem",
                    }}/>

                  </div>
                  <BlogRoll blogstyle={"blogindex"}/>
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
                <div className="column"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subheading2: PropTypes.string,
  description: PropTypes.string,
  aboutme: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        subheading2={frontmatter.subheading2}
        description={frontmatter.description}
        aboutme={frontmatter.aboutme}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}



IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        subheading2
        description
        aboutme {
          heading
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            title
            author
          }
          heading
          description
        }
      }
    }
  }
`
