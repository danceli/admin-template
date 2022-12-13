import { Layout } from 'antd';
import { useState } from 'react';

import Logo from './Logo';
import Menu from './Menu';

import './index.scss';

const { Sider } = Layout;


const LayoutSider: React.FC<{}> = () => {

  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Sider 
      trigger={null} 
      collapsible collapsed={collapsed}
    >
      <Logo />
      <Menu />
    </Sider>
  )
}

export default LayoutSider;