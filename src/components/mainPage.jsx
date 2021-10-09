import React from 'react'
import PropTypes from 'prop-types'

const MainPage = (props) => {
  console.log(props.persons)
  return <div style={{ display: 'flex' }}>
    {props.persons.map(item => (
      <div key={item._id} className="card" style={{ width: '18rem' }}>
        <img src={item.image} className="card-img-top" alt="Photo"/>
        <div className="card-body">
          <h5 className="card-title">{item.firstName + item.lastName}</h5>
          <p className="card-text">{item.personInfo}</p>
          <a href="#" className="btn btn-primary">Перейти куда-нибудь</a>
        </div>
      </div>
    ))}
  </div>
}
MainPage.propTypes = {
  persons: PropTypes.array.isRequired
}
export default MainPage
