import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const PortfolioGrid = ({ gridItems }) => (
  <div className="portfolio-section columns is-multiline is-centered">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-3-fullscreen is-3-widescreen is-3-fullhd is-6-tablet">
        <div className="box" style={{
                height: "28em",
                padding: "1em",
                backgroundColor: "#f7f7f6",
                border: "1px solid #cecbc7",
                borderRadius: '0px',
                boxShadow: 'none',
                 }}>
              <div className="column">
                <div className="columns is-centered">
                  <div className="image is-96x96 is-centered" style={{
                      display: 'inline-block',
                      overflow: 'hidden',
                    }}>
                        <PreviewCompatibleImage imageInfo={item} />
                    </div>
                 
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
    ))}
  </div>
)

PortfolioGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default PortfolioGrid
