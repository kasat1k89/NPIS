import React, { useEffect, useState } from "react";
import { Text, Card, Modal, Button, Icon } from '@gravity-ui/uikit';
import { WindowsIcon, UbuntuIcon, DebianIcon, AstraIcon } from "./Icons";
import './User.css';

const Home = () => {
    const [vms, setVms] = useState([]); // Список виртуальных машин
    const [open, setOpen] = useState(false); // Состояние модального окна
    const [currentMachine, setCurrentMachine] = useState(null); // Текущая ВМ для управления
    const [loading, setLoading] = useState(false); // Индикатор загрузки данных

    // Загрузка данных о виртуальных машинах
    const fetchVMs = async () => {
        try {
            setLoading(true);

            // Получение данных из /vms/raw
            const rawResponse = await fetch("http://localhost:8000/vms/raw/");
            if (!rawResponse.ok) {
                throw new Error(`Ошибка загрузки из /vms/raw: ${rawResponse.statusText}`);
            }
            const rawData = await rawResponse.json();
            console.log("Данные из /vms/raw:", rawData);
            setVms(rawData);

            // Обновление данных через /vms
            const updatedResponse = await fetch("http://localhost:8000/vms/");
            if (!updatedResponse.ok) {
                throw new Error(`Ошибка обновления из /vms: ${updatedResponse.statusText}`);
            }
            const updatedData = await updatedResponse.json();
            console.log("Обновленные данные из /vms:", updatedData);
            setVms(updatedData); // Обновляем состояние
        } catch (error) {
            console.error("Ошибка при загрузке данных ВМ:", error);
        } finally {
            setLoading(false);
        }
    };

    // Вызываем fetchVMs при первом рендере
    useEffect(() => {
        document.title = "Главная"; // Устанавливаем заголовок страницы
        fetchVMs(); // Загружаем данные
    }, []);

    return (
        <div className="home">
            <Text variant="header-2">Виртуальные машины</Text>

            {loading ? (
                <Text variant="body-1">Загрузка данных...</Text>
            ) : (
                <div className="card-container">
                    {vms.length === 0 ? (
                        <Text variant="body-1">Нет доступных виртуальных машин.</Text>
                    ) : (
                        vms.map((vm) => (
                            <div key={vm.id} className="card">
                                <Card className="card-box" view="raised" type="container" size="l">
                                    <div className="card-image">
                                        <Icon data={
                                            vm.os_type.includes('windows') ? WindowsIcon :
                                            vm.os_type.includes('ubuntu') ? UbuntuIcon :
                                            vm.os_type.includes('debian') ? DebianIcon :
                                            AstraIcon
                                        }/>
                                    </div>
                                    <div className="card-text">
                                        <Text variant="header-1">{vm.name}</Text> {/* Имя ВМ */}
                                        <div className="card-params">
                                            <Text variant="body-1">ID: {vm.id}</Text> {/* ID ВМ */}
                                            <Text variant="body-1">Операционная система: {vm.os_type}</Text>
                                            <Text variant="body-1">Процессор: {vm.cpu_cores} ядра</Text>
                                            <Text variant="body-1">Оперативная память: {vm.memory_gb} ГБ</Text>
                                        </div>
                                        <Button
                                            onClick={() => {
                                                console.log("Открываем модальное окно для:", vm.name); // Лог проверки
                                                setOpen(true);
                                                setCurrentMachine(vm); // Устанавливаем текущую ВМ
                                            }}
                                            className="card-edit"
                                            view="action"
                                            width="max"
                                            size="l"
                                        >
                                            Управление
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Модальное окно для управления ВМ */}
            <Modal open={open} onClose={() => setOpen(false)}>
                {currentMachine && (
                    <div className="modal-edit">
                        <Text variant="header-1">Управление виртуальной машиной</Text>
                        <Text variant="body-1" style={{ marginBottom: "10px" }}>
                            Вы управляете машиной: <strong>{currentMachine.name}</strong>
                        </Text>
                        <Text variant="body-1">ID машины: {currentMachine.id}</Text>
                        <div style={{ marginTop: "20px" }}>
                            <Button
                                view="positive"
                                onClick={() => {
                                    console.log(`Сохранено для машины: ${currentMachine.name}`);
                                    setOpen(false);
                                }}
                                style={{ marginRight: "10px" }}
                            >
                                Сохранить
                            </Button>
                            <Button
                                view="negative"
                                onClick={() => {
                                    console.log(`Выключение машины: ${currentMachine.name}`);
                                    setOpen(false);
                                }}
                            >
                                Выключить
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Home;
