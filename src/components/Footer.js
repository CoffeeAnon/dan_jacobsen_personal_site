import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import mail from '../img/mail-dark.svg'
import linkedin from '../img/social/linkedin.svg'
import github from '../img/social/github-dark.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-grey-lighter">
        <div className="content ">
          <h1
            className="is-size-5-mobile is-size-4-tablet is-size-3-widescreen has-text-centered is-family-secondary"
            style={{
              lineHeight: '1',
              padding: '0.5em',
            }}
          >
            {"Contact"}
          </h1>
        </div>
        <div className="columns is-mobile is-centered">
          <div className="column is-narrow">
            <div className="columns is-mobile">
                <div className="column social-column is-narrow">
                  <a title="email" href="mailto:dan@danjacobsen.com">
                    <img className="social-img"
                      src={mail}
                      alt="Email"
                    />
                  </a>
                </div>
                
                <div className="column">
                  <a title="email" href="mailto:dan@danjacobsen.com" style={{
                    padding: "0"
                  }}>

                    <h2 className="has-text-bold has-text-black" to="/blog">
                        dan@danjacobsen.com
                    </h2>
                  </a>
                </div>
            </div> 
            <div className="columns is-mobile">
              <div className="column social-column is-narrow">
                <a title="linkedin" href="https://linkedin.com/danjacobsen">
                  <img className="social-img"
                    src={linkedin}
                    alt="LinkedIn"
                  />
                </a>
              </div>
                <div className="column">
                  <a title="linkedin" href="https://linkedin.com/in/danjacobsen01" style={{
                      padding: "0"
                    }}>
                      <h2 className="has-text-bold has-text-black" to="/blog">
                          linkedin.com/danjacobsen
                      </h2>
                  </a>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column social-column is-narrow">
                  <a title="github" href="https://github.com/CitizenDaniel">
                    <img
                      src={github}
                      alt="Github"
                      style={{ width: '1.5em', height: '1.5em' }}
                    />
                  </a>
                </div>
                <div className="column">
                  <a title="github" href="https://github.com/CitizenDaniel" style={{
                      padding: "0"
                    }}>

                    <h2 className="has-text-bold has-text-black" to="/blog">
                        github.com/citizendaniel
                      </h2>
                  </a>
                </div>
              </div>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
