import React from 'react'
import HexagonItem from './hexagon-item'
import defaultImg from '../../assets/coming.soon.png'
import PropTypes from 'prop-types'

const HexagonList = (props) => {
  return (
    <ul className='zuk-hex-list'>
      {
        props.items.map((item, key) => <HexagonItem key={key} src={item.img ? item.img : defaultImg} title={item.title} context={item.context} />)
      }
    </ul>
  )
}
HexagonList.propTypes = {
  items: PropTypes.array.isRequired
}
export default HexagonList
