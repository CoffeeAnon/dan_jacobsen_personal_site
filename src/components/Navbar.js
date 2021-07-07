import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-white is-fixed-top"
        role="navigation"
        aria-label="main-navigation">
        <div className="container" >
          <div className="navbar-brand" >
            {
              <Link to="/" className="navbar-item">
                <h2 className="title is-size-5-mobile is-size-5-tablet is-size-4-desktop is-family-secondary has-text-centered has-text-weight-bold">
                  Dan Jacobsen
                </h2>
              </Link>
            
            }

            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered" style={{
                paddingTop: '0.4em',
              }}>
                  <Link className="navbar-item" to="/about">
                    <h3 className="title is-size-6-mobile is-size-6-tablet is-size-5-desktop is-family-secondary has-text-centered has-text-weight-bold">
                      About me
                    </h3>
                  </Link>
                  <Link className="navbar-item" to="/products">
                    <h3 className="title is-size-6-mobile is-size-6-tablet is-size-5-desktop is-family-secondary has-text-centered has-text-weight-bold">
                      Portfolio
                    </h3>
                  </Link>
                  <Link className="navbar-item" to="/">
                    <h3 className="title is-size-6-mobile is-size-6-tablet is-size-5-desktop is-family-secondary has-text-centered has-text-weight-bold">
                      Blog
                    </h3>
                  </Link>
                  <Link className="navbar-item" to="/">
                    <h3 className="title is-size-6-mobile is-size-6-tablet is-size-5-desktop is-family-secondary has-text-centered has-text-weight-bold">
                      Other Things
                    </h3>
                  </Link>
                {/*
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
                <Link className="navbar-item" to="/contact/examples">
                  Form Examples
                </Link>

              */}
            </div>
            {/*
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
             */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
