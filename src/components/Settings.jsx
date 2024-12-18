import React, {useEffect} from "react";
import {TextInput, Text} from '@gravity-ui/uikit';
import './User.css';

const Settings = () => {

    useEffect(() => {
        document.title = "Настройки";
    }, []);

    return (
        <div className="create">
            <Text variant="header-2">Тут будут настройки</Text>
        </div>
    )
}

export default Settings;
