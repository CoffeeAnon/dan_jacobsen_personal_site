import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="project-section columns is-multiline is-centered">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-narrow">
        <div className="columns is-centered" style={{
            display: "flex",
          }}>
          <div className="column is-narrow is-flex-grow-0" style={{
              alignContent: "center",
            }}>
            <div className="box" style={{
                width: "350px",
                
              }}>
              <div>
                <div
                  style={{
                    width: '300px',
                    display: 'inline-block',
                    border: '1px solid #aaa',
                    height: '10em',
                    overflow: 'hidden',

                  }}
                  >
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              </div>
              <p className="title is-5 is-family-secondary" style={{
                    fontSize: "1.1em", 
                    marginBottom: "1.5em",
                    marginTop: "0.25em",
                    marginLeft: "0.5em",
                  }}>
              {item.title}
              </p>
              <p className="subtitle is-6 is-family-secondary" style={{
                    marginLeft: "0.5em",
                  }}>
                {item.author}
              </p>
              <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>

              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
