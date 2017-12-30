import React from 'react'
import PropTypes from 'prop-types'
import ComingSoonIcon from '../assets/coming.soon.png'
// import CesiumIcon from '../assets/cesium.logo.png'
import ProfileIcon from '../assets/profile.jpeg'
import AlgorithmIcon from '../assets/algorithm.png'
import { Hexagon } from 'z-ui-kit'
const Main = (props) => {
  const list = [
    { title: 'Profile', context: 'About me', src: ProfileIcon },
    // { title: 'Cesium Notes', context: 'Development with Cesium', src: CesiumIcon },
    { title: 'Algorithm', context: 'Algorithm Practices', link: '/algorithms', src: AlgorithmIcon },
    // { title: 'Better way Threejs', context: 'Coming Soon...' }
  ]
  const handleClick = (item) => {
    if (item.link) {
      props.history.push(item.link)
    }
  }
  return (
    <div className='zuk-hex-wrapper'>
      <Hexagon list={list} onClick={handleClick} defaultIcon={ComingSoonIcon}/>
    </div>
  )
}

Main.propTypes = {
  history: PropTypes.object.isRequired
}

export default Main
