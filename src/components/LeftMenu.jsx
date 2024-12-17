import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Text } from '@gravity-ui/uikit';
import { HomeIcon, AddIcon, SettingsIcon, ExitIcon } from "./Icons";
import '../styles.css';
import './LeftMenu.css';

const LeftMenu = ({ isActive, isCollapsed, sidebarRef }) => {
    return (
        <nav
            ref={sidebarRef}
            className={`sidebar ${isActive ? 'active' : ''} ${isCollapsed ? 'collapsed' : ''}`}
        >
            <ul className="list">
                <li className="list-item">
                    <Link to={"/User"}>
                        <Button view="outlined" width="max" size="l" selected>
                            <Icon data={HomeIcon} size={20} />
                            {!isCollapsed && <Text variant="body-2" className="text">Главная</Text>}
                        </Button>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to={""}>
                        <Button view="outlined" width="max" size="l">
                            <Icon data={AddIcon} size={20} />
                            {!isCollapsed && <Text variant="body-2" className="text">Создать ВМ</Text>}
                        </Button>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to={""}>
                        <Button view="outlined" width="max" size="l">
                            <Icon data={SettingsIcon} size={20} />
                            {!isCollapsed && <Text variant="body-2" className="text">Настройки</Text>}
                        </Button>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to={"/"}>
                        <Button view="outlined" width="max" size="l">
                            <Icon data={ExitIcon} size={20} />
                            {!isCollapsed && <Text variant="body-2" className="text">Выход</Text>}
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftMenu;
