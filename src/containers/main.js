import React from 'react'
import HexaList from '../components/hexalist/hexagon-list'
import CesiumIcon from '../assets/cesium.logo.png'
import ProfileIcon from '../assets/profile.jpeg'

const Main = (props) => {

  const list = [
    { title: 'Profile', context: 'About me', img: ProfileIcon },
    { title: 'Cesium Notes', context: 'Development with Cesium', img: CesiumIcon },
    { title: 'Better way Threejs', context: 'Coming Soon...'}
  ]
  return (
    <div className='zuk-hex-wrapper'>
      <HexaList items={list} />
    </div>
  )
}

export default Main
