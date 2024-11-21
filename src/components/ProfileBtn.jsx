import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from "react-router-dom";

const items = [
    {
      label: <Link to={"#"}>Профиль</Link>,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <Link to={"/"}>Выйти</Link>,
      key: '1',
    },
];

const ProfileBtn = () => {
    return (
        <Dropdown menu={{items,}} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <Space align="center">
                    Люленов Евгений
                </Space>
            </a>
        </Dropdown>
    );
};

export default ProfileBtn;