import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="project-section columns is-multiline is-centered">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-narrow">
        <div className="columns is-centered is-mobile" style={{
            display: "flex",
          }}>
          <div className="column is-narrow">
            <div className="box" style={{
                width: "24.5em",
                height: "28em",
                padding: "1em",
                backgroundColor: "#f7f7f6",
              }}>
              <div className="column " style={{
                    padding: "0px",
                    marginTop: "2em",
                  }}>
                <div className="columns is-centered is-mobile" style={{
                      padding: "0px",
                    }}>
                  <div className="column is-narrow ">
                    <div
                      style={{
                        width: '22em',
                        display: 'inline-block',
                        border: '1px solid #aaa',
                        height: '10em',
                        overflow: 'hidden',

                      }}
                      >
                      <PreviewCompatibleImage imageInfo={item} />
                    </div>
 
                  </div>
                </div>
                <div>
               </div>
              
                <p className="title is-5 is-family-secondary is-size-5" style={{
                        margin: "0em 0.5em 1.3em 0.5em",
                        lineHeight: "1.2",
                    }}>
                {item.title}
                </p>
                <p className="subtitle is-6 is-family-secondary is-size-6" style={{
                      marginLeft: "0.5em",
                      fontWeight: "bold",
                    }}>
                  {item.author}
                </p>
                <div className="content is-size-7" style={{
                        marginLeft: "0.5em",
                        marginRight: "0.5em",
                  }}>
                    {item.text}
                </div>
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
