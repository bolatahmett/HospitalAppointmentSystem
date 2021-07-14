import { Col, Row, Layout, Menu, Button, Tooltip, Alert } from 'antd';
import React, { useContext, useState } from 'react';
import { UserOutlined, LaptopOutlined, LogoutOutlined } from '@ant-design/icons';
import AppointmentCard from '../components/AppointmentCard';
import { useHistory } from 'react-router-dom';
import UserContext from '../components/UserContext';

const { Header, Content, Sider } = Layout;

const text = <span>Çıkış</span>;

const UserPage = () => {

    const history = useHistory();

    const context = useContext(UserContext);

    const [tabKey, setTabKey] = useState('1');

    const onSelectTab = (selectedInfo: any) => {
        setTabKey(selectedInfo.key);
    }

    return (
        <Row style={{ height: "inherit" }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}  >
                <Layout style={{ height: "inherit" }}>
                    <Header className="header">
                        <Row>
                            <Col span={18}>
                                <div className="logo">Hastane Randevu Sistemi</div>
                            </Col>
                            <Col span={5}>
                                <div className="logo">{context.user.Name} {context.user.Surname}</div>
                            </Col>
                            <Col span={1}>
                                <Tooltip placement="leftTop" title={text}>
                                    <Button
                                        type="primary"
                                        icon={<LogoutOutlined />}
                                        onClick={() => {
                                            history.push("/")
                                        }}
                                    />
                                </Tooltip>

                            </Col>
                        </Row>

                    </Header>
                    <Layout style={{ height: "inherit" }}>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['1']}
                                style={{ height: '100%', borderRight: 0 }}
                                onSelect={onSelectTab}
                            >
                                <Menu.Item key="1" icon={<UserOutlined />}> Randevular</Menu.Item>
                                <Menu.Item key="2" icon={<LaptopOutlined />}> Bildirimler</Menu.Item>
                                <Menu.Item key="3" icon={<UserOutlined />}> Kişisel Bilgiler</Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px', height: "inherit" }}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                    height: "inherit"
                                }}
                            >
                                {tabKey === '1' && <AppointmentCard></AppointmentCard>}
                                {tabKey === '2' && <Alert
                                    message="Dikkat"
                                    description="Randevunuz 1 saat ileri alınmıştır."
                                    type="warning"
                                    showIcon
                                    closable
                                />}
                                {tabKey === '3' && "Yapım aşamasında."}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Col>
        </Row>
    );
};

export default UserPage;