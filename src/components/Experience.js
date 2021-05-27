import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ExperienceGrid = ({ gridItems }) => (
  <div className="experience-section columns is-multiline is-centered is-1 is-variable is-variable-vertical" style={{
  }}>
    {gridItems.map((item) => (
      <div key={item.title} className="column is-6">
        <div className="box" style={{
            height: "25em",
            padding: "1em",
            backgroundColor: "#f3f1eb",
            border: "1px solid #cecbc7",
            borderRadius: '0px',
            boxShadow: 'none',
          }}>
          <div className="columns is-centered is-mobile" style={{
                      padding: "0px",
          }}>
            <div className="column is-narrow ">
              <div
                style={{
                  width: '8em',
                  display: 'inline-block',
                  height: '6em',
                  overflow: 'hidden',

                }}>
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
          </div>
          <div className="column " style={{
              marginTop: "1em",
          }}>
            <div className="columns is-centered is-mobile" style={{
            }}>
              <div className="column is-narrow ">
                <h3 className="is-size-6 is-family-secondary">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
          <div className="content is-size-7" style={{
          }}>
            {item.text}
          </div>
        </div>
      </div>
    ))}
  </div>
)

ExperienceGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default ExperienceGrid
