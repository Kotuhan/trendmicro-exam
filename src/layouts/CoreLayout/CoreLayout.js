import React from 'react'
import Menu from '../../components/Menu'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container'>
    <Menu />
    <div className='content'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
