import React, { Component } from 'react';
import { 
    Icon, 
    IconStar, 
    IconHome,
    IconBookOpen,
    IconUsers,
    IconCogs,
    IconTwitch
} from '../Icon';

import './Sidebar.scss'
import logo from '../../images/3xpmTemp.png'
import SidebarMenuItem from './SidebarMenuItem.js'
import SidebarDropdown from './SidebarDropdown.js'

class Sidebar extends Component {
  render() {
    return (
        <nav className="sidebar_wrapper">
            <div className="sidebar_content">
                <div className="sidebar_brand">
                    <img src={logo} alt="3xPM"/>
                    
                </div>
                <div className="sidebar_login_user">
                    <div className="sidebar_user_pic">
                        <img className="img-responsive img-rounded" src="https://icons-for-free.com/free-icons/png/512/1055073.png" alt="User"/>                       
                    </div>
                    <div className="sidebar_user_info">
                        <a href='www.google.com'>
                            <span className="sidebar_user_name">
                                <strong>Tyranni</strong>
                            </span>
                        </a>                     
                        <span className="sidebar_user_role">Developer</span>
                    </div>
                </div>
                <div className="sidebar_menu">
                    <ul>
                        <li className="sidebar_menu_header">
                            <span>Yleinen</span>
                        </li>
                        <li>
                            <SidebarMenuItem icon={IconHome} title="Etusivu" url="www.google.com"/>
                        </li>
                        <li>
                            <SidebarMenuItem icon={IconBookOpen} title="Historiikki" url="www.google.com"/>
                        </li>
                        <li>
                            <SidebarMenuItem icon={IconUsers} title="Jäsenet" url="www.google.com"/>
                        </li>
                        <li className="sidebar_menu_header">
                            <span>Turnaukset</span>
                        </li>
                        <li className="sidebar_dropdown">
                            <SidebarDropdown icon={IconStar} title="Rocket League">
                                <a href="www.google.com">Info</a>
                                <a href="www.google.com">Ottelut</a>
                                <a href="www.google.com">Pistepörssi</a>
                                <a href="www.google.com">Pelaajat</a>
                                <a href="www.google.com">Säännöt</a>
                            </SidebarDropdown>
                        </li>
                        <li>

                        </li>
                        <li className="sidebar_menu_header">
                            <span>Hallinta</span>
                        </li>
                        <li>
                            <SidebarMenuItem icon={IconCogs} title="Hallitse turnauksia" url="www.google.com"/>
                        </li>
                    </ul>
                </div>                
            </div>
            <div className="sidebar_footer">
                <div>
                    <a href="https://www.twitch.tv/3xpm_rll">
                        <Icon icon={IconTwitch} />
                    </a>
                </div>
                <div>
                    <a href="https://www.youtube.com/channel/UC-L_mOWLAu_fSXr0yWGM3Aw">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/3xPMofficial">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/groups/344976625580091/">
                    <   i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
  }
}

export default Sidebar;