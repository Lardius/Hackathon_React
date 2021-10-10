import React from 'react'
import Badge from './badge'
import PropTypes from 'prop-types'

const MainPage = (props) => {
  console.log(props.persons)
  return (
    <div style={{ display: 'flex' }}>
      {props.persons.map((item) => (
        <div key={item._id} className="card" style={{ width: '18rem' }}>
          <img src={item.image} className="card-img-top" alt="Photo" />
          <div className="card-body">
            <Badge
              color={item.color}
              context={item.firstName + item.lastName}
              status={item.teamLeader}
            />

            <p className="card-text">{item.personInfo}</p>
            <a href="#" className="btn btn-primary">
              Перейти куда-нибудь
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
MainPage.propTypes = {
  persons: PropTypes.array.isRequired
}
export default MainPage
