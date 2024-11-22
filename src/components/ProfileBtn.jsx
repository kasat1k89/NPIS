import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Space, Avatar } from 'antd';
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
      <div>
        <Dropdown menu={{items,}} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          <Space align="center">
            <Avatar style={{ backgroundColor: '#87d068', alignItems: 'center'}} icon={<UserOutlined />} />
            <div className="small">Люленов Евгений</div>
          </Space>
        </a>
        </Dropdown>
      </div>
    );
};

export default ProfileBtn;