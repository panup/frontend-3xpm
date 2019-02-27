import React, { Component } from 'react';
import './Sidebar.scss'
import '../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '../../../node_modules/@fortawesome/fontawesome-free/scss/brands.scss'
import '../../../node_modules/@fortawesome/fontawesome-free/scss/solid.scss'

class SidebarDropdown extends Component {

    state = {
        isOpen: false
    }

    toggleState = () => {
        this.setState({ isOpen: !this.state.isOpen })
        console.log(this.state.isOpen)
      }

  render() {
    return (
        <div onClick={this.toggleState}>
            <a href="#">
                <i className={this.props.icon}></i>
                <span>{this.props.title}</span>   
                <i className="fas fa-angle-right angle_rotate"></i>      
            </a>
            <div className={this.state.isOpen ? "sidebar_dropdown_submenu_open":"sidebar_dropdown_submenu"} >
                <ul>
                    {this.props.children.map((child, i) =>{
                        return(
                            <li>
                                {child}
                            </li>
                        )
                    })}
                </ul>
            </div>      
        </div> 
    );
  }
}

export default SidebarDropdown;