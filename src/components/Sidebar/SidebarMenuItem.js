import React, { Component } from 'react'
import { Icon } from '../Icon'

import './Sidebar.scss'

class SidebarMenuItem extends Component {
  render () {
    const { title, url, icon } = this.props
    return (
      <a href={url}>
        <Icon icon={icon} />
        <span>{title}</span>
      </a>
    )
  }
}

export default SidebarMenuItem
