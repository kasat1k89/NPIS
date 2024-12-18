import React, { useState } from "react";
import ProfileBtn from "./ProfileBtn";
import './UpperMenu.css';
import { Icon, Text } from '@gravity-ui/uikit';
import { BurgerIcon, BellIcon } from "./Icons";

const UpperMenu = ({ toggleSidebar, burgerRef }) => {

    return (
        <header className="header">

            <div className="logotype">
                <div className="logo-menu">
                    <div className="toggle-btn" ref={burgerRef} onClick={toggleSidebar}>
                        <Icon data={BurgerIcon} size={20} />
                    </div>
                </div>
                <Text variant="header-2">Киберполигон</Text>
            </div>
            
            <nav className="navbar">

                <Icon data={BellIcon} size={20} />
                <ProfileBtn/>
            </nav>
        </header>
    );
};

export default UpperMenu;