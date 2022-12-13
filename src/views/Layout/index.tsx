import { Layout } from 'antd';
import Sider from './Sider';
import Header from './Header';
import Content from './Content';

const RouterLayout: React.FC<{}> = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  )
}


export default RouterLayout;