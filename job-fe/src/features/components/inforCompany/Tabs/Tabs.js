import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
// import Jobs from "./Jobs";
import AddJob from "./AddJob/AddJob";
import UserApply from "./UserApply/UserApply";
import Infor from "./infor/Infor";
import UpdateJob from "./UpdateJob/UpdateJob";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Jobs from "./Jobs/Jobs";
// import Revenue from "../../../admin/Revenue/Revenue";
// import { removetag, tagData, updatetag } from "../../admin/slice/tagSlice";

export default function Tab({ id }) {
  const match = useRouteMatch();
  // console.log(match);
  const { Header, Sider, Content } = Layout;
  const [state, setState] = useState({
    collapsed: true,
    visible: true,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  return (
    <div className=" mt-2">
      {/* <Tabs defaultActiveKey="1" tabPosition="left">
        <TabPane tab="Các công việc đã tạo" key="1">
          <Jobs id={id} heard={true} />
          <LayoutJob></LayoutJob>
        </TabPane>
        <TabPane tab="Đăng tuyển việc" key="2">
          <AddJob id={id} />
        </TabPane>
        <TabPane tab="Các ứng viêc ứng tuyển" key="3">
          <UserApply id={id} />
        </TabPane>
        <TabPane tab="Thông tin công ty" key="4">
          <Infor id={id} />
        </TabPane>
        <TabPane tab="Sửa Công Việc" key="5">
          <UpdateJob />
        </TabPane>
      </Tabs> */}
      <div id="nav">
        <Layout>
          <Sider trigger={null} collapsible collapsed={state.collapsed}>
            <div className="logo">
              <Link to="/">
                <p className="text-center w-100">
                  {state.collapsed === true ? (
                    <i className="fas fa-user-shield"></i>
                  ) : (
                    <strong>Nhà Tuyển Dụng</strong>
                  )}
                </p>
              </Link>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item
                key="1"
                icon={
                  state.collapsed === true ? (
                    <span className="fas fa-user-injured"></span>
                  ) : (
                    <span className="fas fa-user-injured mr-2"></span>
                  )
                }
              >
                <Link to="inforCompany">Các công việc đã tạo</Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={
                  state.collapsed === true ? (
                    <span className="far fa-newspaper"></span>
                  ) : (
                    <span className="far fa-newspaper mr-2"></span>
                  )
                }
              >
                <Link to="inforCompany/AddJob">Đăng tuyển việc</Link>
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={
                  state.collapsed === true ? (
                    <span className="fas fa-check"></span>
                  ) : (
                    <span className="fas fa-check mr-2"></span>
                  )
                }
              >
                <Link to={`${match.url}/UserApply`}>
                  Các ứng viêc ứng tuyển
                </Link>
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={
                  state.collapsed === true ? (
                    <span className="far fa-newspaper"></span>
                  ) : (
                    <span className="far fa-newspaper mr-2"></span>
                  )
                }
              >
                <Link to={`${match.url}/Infor`}>Thông tin công ty</Link>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background h-100vh"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/inforCompany">
                  {/* <Jobs />
                   */}
                  jobs
                </Route>
                <Route exact path="/inforCompany/AddJob">
                  {/* <AddJob url={match.url} /> */}
                  thêm
                </Route>
                <Route exact path={`${match.path}/UserApply`}>
                  <UserApply url={match.url} />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
