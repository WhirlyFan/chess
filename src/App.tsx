import { Layout, Typography } from "antd";
import Board from "./Board";

function App() {
  const { Header, Content } = Layout;
  const { Title } = Typography;
  return (
    <>
      <Layout>
        <Header>
          <Title level={2} style={{ color: "#fff" }}>
            Chess
          </Title>
        </Header>
        <Content className='content'>
          <Board />
        </Content>
      </Layout>
    </>
  );
}

export default App;
