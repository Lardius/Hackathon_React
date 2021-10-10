import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ name, percent, color, image }) => {
  return (
    <div className="m-3">
      <div className="d-flex align-items-center">
        <h3 className="m-2">{name}</h3>
        <img
          style={{
            width: '32px',
            height: '32px',
            objectFit: 'contain'
          }}
          src={image}
          alt={name}
        />
      </div>
      <div className="progress">
        <div
          className={`progress-bar fw-bold`}
          role="progressbar"
          style={{ width: `${percent}%`, backgroundColor: `${color}` }}
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100">
          {`${percent}%`}
        </div>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default ProgressBar
