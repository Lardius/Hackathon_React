import React from 'react'
import PropTypes from 'prop-types'
import ProgressList from './progressList'

const Bookmark = ({ persons }) => {
  console.log(persons)
  return (
    <ProgressList skills={persons[0].skills}/>
  )
}
Bookmark.propTypes = { persons: PropTypes.array.isRequired }
export default Bookmark
