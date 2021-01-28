import React, {useState} from 'react';
import {FaBars, FaBell, FaUserCircle, FaHome, FaClipboardList, FaCommentDots, FaCog, FaUserCog} from 'react-icons/fa'


const Navbar = props => {
    const [drawer, Setdrawer] = useState(false);
    return (
        <>
            <div className="Header">
                <div className="Header-left">
                    <FaBars onClick={() => Setdrawer(!drawer)} className="Header-leftIcon"/>
                <span className="Header-logo">LOGO</span>
                </div>
                <div className="Header-right">
                    <FaBell className="Header-rightIcon"/>
                    <FaUserCircle className="Header-rightIcon"/>
                    <div className="Header-user">
                        <span className="UserName">
                            USERNAME
                        </span>
                    </div>
                </div>
            </div>
            <div className={drawer ? "Drawer Show" : "Drawer"}>
                <ul className="Drawer-sections">
                    <div className="Drawer-section">
                        <FaHome className="Drawer-sectionIcon"/> 
                        <span className="Drawer-sectionName">Home</span>
                    </div>
                    <li className="Drawer-section">
                        <FaClipboardList className="Drawer-sectionIcon"/> 
                        <span className="Drawer-sectionName">Orders</span>
                    </li>
                    <li className="Drawer-section">
                        <FaCommentDots className="Drawer-sectionIcon"/> 
                        <span className="Drawer-sectionName">Comments</span>
                    </li>
                    <li className="Drawer-section">
                        <FaUserCog className="Drawer-sectionIcon"/> 
                        <span className="Drawer-sectionName">User</span>
                    </li>
                    <li className="Drawer-section">
                        <FaCog className="Drawer-sectionIcon"/> 
                        <span className="Drawer-sectionName">Options</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
