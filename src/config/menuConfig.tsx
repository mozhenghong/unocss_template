import { ScheduleOutlined, UserOutlined, UnorderedListOutlined, VideoCameraOutlined } from '@ant-design/icons';

export interface MenuProps {
  label: string,
  key: string,
  icon?: React.ReactNode,
  children?: {
    label: string,
    key: string
  }[]
}

export const menuList = [
  {
    label: '统计分析',
    key: '/home',
    icon: <ScheduleOutlined />,
  },
  {
    label: '人员管理',
    key: '/bbb',
    icon: <VideoCameraOutlined />,
  },
  {
    label: '访客管理',
    key: '/ccc',
    icon: <UnorderedListOutlined />,
  },
  {
    label: '系统管理',
    key: '/ddd',
    icon: <UserOutlined />,
    children: [
      {
        label: '操作员管理',
        key: '/hhh',
      },
      {
        label: '证件管理',
        key: '/eee',
      },
      {
        label: '检查管理',
        key: '/fff',
      },
      {
        label: '日志管理',
        key: '/ggg',
      },
    ]
  },
];

