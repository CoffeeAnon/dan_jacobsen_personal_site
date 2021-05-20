import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

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
                          <a title="facebook" href="https://facebook.com">
                            <img
                              src={facebook}
                              alt="Facebook"
                              style={{ width: '1em', height: '1em' }}
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
                      <a title="twitter" href="https://twitter.com">
                      <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        style={{ width: '1em', height: '1em' }}
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
                      <a title="instagram" href="https://instagram.com">
                        <img
                          src={instagram}
                          alt="Instagram"
                          style={{ width: '1em', height: '1em' }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <h2 className="has-text-white has-text-bold" to="/blog">
                      github.com/CitizenDaniel
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
