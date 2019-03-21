import React, { Component } from 'react';
import { Icon, IconAngleRight } from '../Icon';

import './Sidebar.scss'

class SidebarDropdown extends Component {

    state = {
        isOpen: false
    }

    toggleState = () => {
        this.setState({ isOpen: !this.state.isOpen })
        console.log(this.state.isOpen)
    }

    render() {
        const { title, icon, children } = this.props;
        return (
            <div onClick={this.toggleState}>
                <a href="#">
                    <Icon icon={icon} />
                    <span>{title}</span>   
                    <Icon icon={IconAngleRight} className="angle_rotate" />
                </a>
                <div className={this.state.isOpen ? "sidebar_dropdown_submenu_open":"sidebar_dropdown_submenu"} >
                    <ul>
                        {children.map((child, i) => {
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