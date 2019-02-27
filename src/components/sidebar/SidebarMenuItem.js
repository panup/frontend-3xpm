import React, { Component } from 'react';
import './Sidebar.scss'
import '../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '../../../node_modules/@fortawesome/fontawesome-free/scss/brands.scss'

class SidebarMenuItem extends Component {
  render() {
    return (
        <a href={this.props.url}>
            <i className={this.props.icon}></i>
            <span>{this.props.title}</span>
        </a>
    );
  }
}

export default SidebarMenuItem;