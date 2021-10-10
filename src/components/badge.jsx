import React from 'react'
import Proptypes from 'prop-types'

const Badge = ({ color, context, status }) => {
  return (
    <span className={'badge badge-' + (color)}>
      {context}
      {status && (<i className='bi bi-check-square-fill'></i>)}
    </span>
  )
}

Badge.propTypes = {
  color: Proptypes.string.isRequired,
  context: Proptypes.string.isRequired,
  status: Proptypes.bool
}

export default Badge
