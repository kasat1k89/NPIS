import React, { useState } from "react";
import { TextInput, Text, Button, Select } from "@gravity-ui/uikit";
import "./User.css";

const Create = () => {
    const [name, setName] = useState("");
    const [cpuCores, setCpuCores] = useState("");
    const [memory, setMemory] = useState("");
    const [storage, setStorage] = useState("");
    const [osType, setOsType] = useState("");

    const handleCreateVM = async () => {
        // Формируем данные для отправки
        const requestData = {
            name,
            cpu_cores: parseInt(cpuCores) || 0,
            memory_gb: parseInt(memory) || 0,
        };

        // Добавляем параметры, если они заполнены
        if (storage) requestData.disk_size_gb = parseInt(storage);
        if (osType) requestData.os_type = osType;

        console.log("Отправляемые данные:", requestData); // Логируем для отладки

        try {
            const response = await fetch("http://localhost:8000/create_vm/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Виртуальная машина создаётся!");
                console.log("Результат:", result);
            } else {
                alert(`Ошибка: ${JSON.stringify(result.detail)}`);
            }
        } catch (error) {
            console.error("Ошибка запроса:", error);
            alert("Не удалось подключиться к серверу.");
        }
    };

    return (
        <div className="create">
            <Text variant="header-2">Создание ВМ</Text>

            <div className="option">
                <Text variant="body-2">Название</Text>
                <TextInput
                    style={{ width: "300px" }}
                    placeholder="Название виртуальной машины"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="option">
                <Text variant="body-2">Операционная система</Text>
                <Select
                    size="m"
                    placeholder="Выбери из списка (необязательно)"
                    width={300}
                    onChange={(value) => setOsType(value)}
                >
                    <Select.Option value="ubuntu">Ubuntu</Select.Option>
                    <Select.Option value="windows">Windows 10</Select.Option>
                    <Select.Option value="debian">Debian</Select.Option>
                    <Select.Option value="astra">Astra</Select.Option>
                </Select>
            </div>

            <div className="option">
                <Text variant="body-2">Количество ядер процессора</Text>
                <TextInput
                    style={{ width: "300px" }}
                    type="number"
                    placeholder="Введите количество ядер"
                    value={cpuCores}
                    onChange={(e) => setCpuCores(e.target.value)}
                />
            </div>

            <div className="option">
                <Text variant="body-2">Оперативная память (ГБ)</Text>
                <TextInput
                    style={{ width: "300px" }}
                    type="number"
                    placeholder="Введите объём памяти"
                    value={memory}
                    onChange={(e) => setMemory(e.target.value)}
                />
            </div>

            <div className="option">
                <Text variant="body-2">Размер жёсткого диска (ГБ)</Text>
                <TextInput
                    style={{ width: "300px" }}
                    type="number"
                    placeholder="Введите размер диска (необязательно)"
                    value={storage}
                    onChange={(e) => setStorage(e.target.value)}
                />
            </div>

            <Button
                view="action"
                size="l"
                style={{ marginTop: "25px" }}
                onClick={handleCreateVM}
            >
                <Text variant="body-2">Создать</Text>
            </Button>
        </div>
    );
};

export default Create;
