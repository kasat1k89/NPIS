import React, { useEffect, useState } from "react";
import { Text, Card, Button, Modal, Select, Icon } from '@gravity-ui/uikit';
import { WindowsIcon, UbuntuIcon, DebianIcon, AstraIcon } from "./Icons";
import './User.css';

const Home = () => {
    useEffect(() => {
        document.title = "Главная";
    }, []);

    const [open, setOpen] = useState(false);
    const [isTurnedOn, setIsTurnedOn] = useState([true, true, true, true, true]);
    const [currentMachine, setCurrentMachine] = useState(null);

    const machines = [
        { id: 1, name: "Windows Server", os: "Windows", cpu: "4 ядра", ram: "12 ГБ", disk: "50 ГБ" },
        { id: 2, name: "Debian 12", os: "Linux", cpu: "2 ядра", ram: "8 ГБ", disk: "20 ГБ" },
        { id: 3, name: "Ubuntu Server", os: "Linux", cpu: "8 ядер", ram: "16 ГБ", disk: "100 ГБ" },
        { id: 4, name: "Windows 10", os: "Windows", cpu: "4 ядра", ram: "16 ГБ", disk: "50 ГБ" },
        { id: 5, name: "Astra", os: "Linux", cpu: "6 ядер", ram: "12 ГБ", disk: "75 ГБ" },
    ];

    const handleToggle = (index) => {
        setIsTurnedOn((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="home">
            <Text variant="header-2">Виртуальные машины</Text>

            <div className="card-container">
                {machines.map((machine, index) => (
                    <div key={machine.id} className="card">
                        <Card className="card-box" view="raised" type="container" size="l">
                            <div className="card-image">
                                <Icon data={
                                    machine.os === 'Windows'
                                    ? WindowsIcon
                                    : machine.name.includes('Ubuntu')
                                    ? UbuntuIcon
                                    : machine.name.includes('Debian')
                                    ? DebianIcon
                                    : AstraIcon
                                }/>
                            </div>                          
                            <div className="card-text">
                                <Text variant="header-1">{machine.name}</Text>
                                <div className="card-params">
                                    <Text variant="body-1">Операционная система: {machine.os}</Text>
                                    <Text variant="body-1">Процессор: {machine.cpu}</Text>
                                    <Text variant="body-1">Оперативная память: {machine.ram}</Text>
                                    <Text variant="body-1">Размер диска: {machine.disk}</Text>
                                    <Text variant="body-1">
                                        Состояние:&nbsp;
                                        <Text
                                            variant="body-1"
                                            color={isTurnedOn[index] ? "positive" : "danger"}
                                        >
                                            {isTurnedOn[index] ? "Включена" : "Выключена"}
                                        </Text>
                                    </Text>
                                </div>
                                <Button
                                    onClick={() => {
                                        setOpen(true);
                                        setCurrentMachine(index);
                                    }}
                                    className="card-edit"
                                    view="action"
                                    width="max"
                                    size="l"
                                >
                                    <Text variant="body-2">Управление</Text>
                                </Button>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                {currentMachine !== null && (
                    <div className="modal-edit">
                        <Text variant="header-1">Управление</Text>
                        <div className="modal-script">
                            <Text variant="body-2">Добавить скрипт</Text>
                            <Select
                                multiple={true}
                                size="m"
                                placeholder="Выберите нужные скрипты"
                                width={250}
                            >
                                <Select.Option value="1">Создать пользователя</Select.Option>
                                <Select.Option value="2">Сделать что-то</Select.Option>
                                <Select.Option value="3">Пожарить баребух</Select.Option>
                                <Select.Option value="4">Создать что-то</Select.Option>
                            </Select>
                        </div>
                        <div className="modal-script">
                            <Button
                                className="card-edit"
                                view="action"
                                width="max"
                                size="l"
                            >
                                <Text variant="body-2">Сохранить</Text>
                            </Button>
                            <Button
                                className="card-edit"
                                view={isTurnedOn[currentMachine] ? "outlined-danger" : "outlined-success"}
                                width="max"
                                size="l"
                                onClick={() => handleToggle(currentMachine)}
                            >
                                <Text variant="body-2">
                                    {isTurnedOn[currentMachine] ? "Выключить" : "Включить"}
                                </Text>
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Home;
