import React from 'react'
import PropTypes from 'prop-types'
const HexagonItem = (props) => {

  return (
    <li className='zuk-hex-item'>
      <div className='zuk-hex-container'>
        <a className='zuk-hex-a'>
          <img src={props.src} alt='' />
          <h1>{props.title}</h1>
          <p>{props.context}</p>
        </a>
      </div>
    </li>
  )
}
HexagonItem.propTypes = {
  context: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}
export default HexagonItem