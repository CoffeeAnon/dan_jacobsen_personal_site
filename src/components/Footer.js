import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
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
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content ">
          <h1
            className="is-size-5-mobile is-size-4-tablet is-size-3-widescreen has-text-white-ter has-text-centered"
            style={{
              lineHeight: '1',
              padding: '0.5em',
            }}
          >
            {"Contact"}
          </h1>
        </div>
        <div className="columns is-mobile is-centered">
          <div className="column is-6" style={{marginRight: "6em",
              }}>

            <div className="column social">
                <div className="columns is-mobile">
                    <div className="column is-half">
                      <div className="columns is-mobile" style={{
                            justifyContent: "flex-end"
                          }}>
                        <div className="column is-narrow">
                          <a title="email" href="mailto:dan@danjacobsen.com">
                            <img
                              src={mail}
                              alt="Email"
                              style={{ width: '1.5em', height: '1.5em' }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="column is-half">
                      <h2 className="has-text-white has-text-bold" to="/blog">
                          dan@danjacobsen.com
                      </h2>
                    </div>
                </div>
            </div> 
            <div className="column social">
              <div className="columns is-mobile">

                <div className="column is-half">
                  <div className="columns is-mobile" style={{
                      justifyContent: "flex-end"
                    }}>
                      <div className="column is-narrow">
                      <a title="linkedin" href="https://linkedin.com/danjacobsen">
                      <img
                        src={linkedin}
                        alt="LinkedIn"
                        style={{ width: '1.5em', height: '1.5em' }}
                      />
                    </a>

                      </div>
                  </div>
                </div>
                  <div className="column is-half">
                        <h2 className="has-text-white has-text-bold" to="/blog">
                            linkedin.com/danjacobsen
                        </h2>
                      </div>
              </div>
            </div>
            <div className="column social">
              <div className="columns is-mobile">
                <div className="column is-half">
                  <div className="columns is-mobile" style={{
                        justifyContent: "flex-end"
                      }}>
                    <div className="column is-narrow">
                      <a title="instagram" href="https://github.com/CitizenDaniel">
                        <img
                          src={github}
                          alt="Github"
                          style={{ width: '1.5em', height: '1.5em' }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <h2 className="has-text-white has-text-bold" to="/blog">
                      github.com/citizendaniel
                    </h2>
                </div>

              </div>
            </div>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
