import React from 'react';
import { Layout } from 'antd';
import { AppFooter, Navbar } from '../components';

const { Header, Content, Footer } = Layout;

const PageLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo"/>
        <Navbar />
      </Header>

      <Content style={{padding: '5px 50px'}}>
        <main className="site-layout-content">
          {children}
        </main>
      </Content>

      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  )
};

export default PageLayout;
