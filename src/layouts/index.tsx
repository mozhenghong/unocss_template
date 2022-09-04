import React, { useState } from 'react';
import { Dropdown, Layout, Menu } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import { menuList } from '@/config/menuConfig';
import { getLabel } from '@/utils/common';
import { UpdatePassword } from '@gyzn/coal-components';

import LogoSrc from '@/assets/layout/logo.png';
import AvatarSrc from '@/assets/layout/avatar.png';
import logout from '@/assets/layout/logout.svg';
import password from '@/assets/layout/password.svg';

const { Header, Content, Sider } = Layout;

const LayoutComponent: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(menuList[0].label);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmit = () => {
    setIsModalVisible(false);
  };

  const onCancel = () => setIsModalVisible(false);

  const content = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <div onClick={() => setIsModalVisible(true)}>
              <img src={password} alt="" className="w-4 h-4 mr-3" />
              <span>修改密码</span>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div>
              <img src={logout} alt="" className="w-4 h-4 mr-3" />
              <span>退出登录</span>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <Layout>
      <Header>
        <div className="layoutHeader">
          <img src={LogoSrc} alt="" />
          <div className="layout-header-title">智慧闸机管理系统</div>
          <Dropdown overlay={content} placement="bottomRight" trigger={['click']} overlayClassName="w-40">
            <div className="cursor-pointer">
              <img src={AvatarSrc} alt="" className="mr-2" />
              admin
            </div>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            className='layout-sider'
            mode="inline"
            defaultSelectedKeys={['/home']}
            items={menuList}
            theme='dark'
            onSelect={(SelectEventHandler) => {
              const { item, key, keyPath, selectedKeys, domEvent } = SelectEventHandler
              const label = getLabel(key, menuList);
              setTitle(label)
              navigate(key);
            }}
          />
        </Sider>
        <Layout>
          <div className="bg-[#fff] p-6 text-2xl font-normal text-left">
            {title}
          </div>
          <Content className="p-6 m-0 min-h-full bg-[#f3f3f3]">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <UpdatePassword visible={isModalVisible} onSubmit={onSubmit} onCancel={onCancel} />
    </Layout>
  )
};

export default LayoutComponent;