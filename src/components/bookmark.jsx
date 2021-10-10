import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({ persons }) => {
  console.log(persons)
  return (
    <div>
      <h1>Bookmark</h1>
    </div>
  )
}
Bookmark.propTypes = { persons: PropTypes.array.isRequired }
export default Bookmark
