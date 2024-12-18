import React, {useEffect} from "react";
import {TextInput, Text, Button, Select} from '@gravity-ui/uikit';
import './User.css';

const Create = () => {

    useEffect(() => {
        document.title = "Создание виртуальной машины";
    }, []);

    return (
        <div className="create">
            <Text variant="header-2">Конфигурация</Text>
            <div className="option">
                <Text variant="body-2">Название</Text>
                <TextInput
                    style={{width: '300px'}}
                    type="text" 
                    placeholder="Название виртуальной машины" 
                    size="m" 
                    required />

            </div>

            <div className="option">
                <Text variant="body-2">Операционная система</Text>
                <Select 
                size="m"
                placeholder="Выбери из списка"
                width={300}>
                    <Select.Option value="1">Windows 10</Select.Option>
                    <Select.Option value="2">Windows Server 2016</Select.Option>
                    <Select.Option value="3">Ubuntu</Select.Option>
                    <Select.Option value="4">Debian</Select.Option>
                    <Select.Option value="5">Astra</Select.Option>
                </Select>

            </div>

            <div className="option">
                <Text variant="body-2">Количество ядер процессора</Text>
                <Select 
                size="m"
                placeholder="Выбери из списка"
                width={300}>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">4</Select.Option>
                    <Select.Option value="4">8</Select.Option>
                    <Select.Option value="5">12</Select.Option>
                </Select>

            </div>

            <div className="option">
                <Text variant="body-2">Оперативная память</Text>
                <Select 
                size="m"
                placeholder="Выбери из списка"
                width={300}>
                    <Select.Option value="1">2 Гб</Select.Option>
                    <Select.Option value="2">4 Гб</Select.Option>
                    <Select.Option value="3">6 Гб</Select.Option>
                    <Select.Option value="4">8 Гб</Select.Option>
                    <Select.Option value="5">10 Гб</Select.Option>
                </Select>

            </div>

            <div className="option">
                <Text variant="body-2">Накопитель</Text>
                <Select 
                size="m"
                placeholder="Выбери из списка"
                width={300}>
                    <Select.Option value="1">20 Гб</Select.Option>
                    <Select.Option value="2">40 Гб</Select.Option>
                    <Select.Option value="3">60 Гб</Select.Option>
                    <Select.Option value="4">80 Гб</Select.Option>
                    <Select.Option value="5">100 Гб</Select.Option>
                </Select>

            </div>


            <Button view="action" size="l" style={{marginTop: '25px'}}>
                <Text variant="body-2">Создать</Text>
            </Button>
        </div>
    )
}





export default Create;
