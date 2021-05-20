import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Link as LinkForScroll } from 'react-scroll';
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import arrowSvg from '../img/arrow.svg';


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  subheading2,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-full-height-image-container"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        
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
          marginTop: '5em',
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
    <section className="section section main-container-gradient">
      <div className="container is-centered">
        <div className="section">
          <div className="columns is-mobile">
            <div className="content">
              <div className="content has-text-centered">
                <h3 className="title is-size-4 is-family-secondary is-centered">
                  {intro.heading}
                </h3>
                <p>{description}</p>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/products">
                    See all products
                  </Link>
                </div>
              </div>
              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">
                  Latest stories
                </h3>
                <BlogRoll blogstyle={"blogindex"}/>
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/blog">
                    Read more
                  </Link>
                </div>
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
          }
          heading
          description
        }
      }
    }
  }
`
