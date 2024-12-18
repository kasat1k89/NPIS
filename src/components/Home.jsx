import React, {useEffect} from "react";
import {TextInput, Text} from '@gravity-ui/uikit';
import './User.css';

const Home = () => {

    useEffect(() => {
        document.title = "Главная";
    }, []);

    return (
        <div className="create">
            <Text variant="header-2">Тут будет главная</Text>
        </div>
    )
}

export default Home;