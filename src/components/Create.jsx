import React, { useState } from "react";
import { TextInput, Text, Button, Select } from "@gravity-ui/uikit";
import "./User.css";

const Create = () => {
    const [name, setName] = useState("");
    const [cpuCores, setCpuCores] = useState("");
    const [memory, setMemory] = useState("");
    const [storage, setStorage] = useState("");
    const [osType, setOsType] = useState("");

    // Маппинг типов ОС и их шаблонов
    const osConfigs = {
        "Ubuntu Server": { template_id: "0eb828b6-3b41-4f12-9e72-54c3fd38c1c4" },
        "Windows 10": { template_id: "5a9c53bb-64f8-4af9-9a07-219ba122b69d" },
        "Debian 12": { template_id: "f1fc5e82-9037-434b-a656-ac04df2d0862" },
        "Astra": { template_id: "37192d29-f296-4ee4-a0b9-004463d95c2a" },
        "Windows Server": {template_id: "c0f0181d-8ba4-44a4-9f3b-a5f91bfb52b9"},
        "Blank": {template_id: "00000000-0000-0000-0000-000000000000"},
    };

    const handleCreateVM = async () => {
        // Проверяем, существует ли выбранный тип ОС в маппинге
        const osConfig = osConfigs[osType];
        if (!osConfig || !osConfig.template_id) {
            alert("Выберите корректный тип ОС!");
            return;
        }

        // Формируем данные для отправки
        const requestData = {
            name,
            cpu_cores: parseInt(cpuCores) || 0,
            memory_gb: parseInt(memory) || 0,
            disk_size_gb: storage ? parseInt(storage) : undefined,
            template_id: osConfig.template_id, // Передаём только template_id
        };

        console.log("Отправляемые данные:", requestData);

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
                    placeholder="Выберите ОС"
                    width={300}
                    value={osType} // Указываем текущее значение
                    onUpdate={(value) => setOsType(value)} // Устанавливаем значение в osType
                >
                    <Select.Option value="Ubuntu Server">Ubuntu Server</Select.Option>
                    <Select.Option value="Windows 10">Windows 10</Select.Option>
                    <Select.Option value="Debian 12">Debian 12</Select.Option>
                    <Select.Option value="Astra">Astra</Select.Option>
                    <Select.Option value="Windows Server">Windows Server</Select.Option>
                    <Select.Option value="Blank">Пустая ВМ</Select.Option>
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
